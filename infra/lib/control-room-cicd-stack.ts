import * as cdk from 'aws-cdk-lib';
import { CdkEnviornmentVariables } from '../env';
import { isProd } from '../utils';

interface ControlRoomFeStackOutput {
  readonly s3_bucket: cdk.aws_s3.IBucket;
  readonly cloud_front_distribution: cdk.aws_cloudfront.IDistribution;
}

// Ref: https://medium.com/nerd-for-tech/deploying-web-apps-at-scale-with-aws-cdk-codebuild-codepipeline-and-cloudfront-with-custom-24f824a9c88f
// Ref: https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_codepipeline_actions-readme.html#invalidating-the-cloudfront-cache-when-deploying-to-s3
export class ControlRoomFeCiCdStack extends cdk.Stack {
  constructor(
    scope: cdk.App,
    id: string,
    control_room_fe_stack_output: ControlRoomFeStackOutput,
    environment_variables: CdkEnviornmentVariables,
    props?: cdk.StackProps,
  ) {
    super(scope, id, props);

    const {
      env,
      github_owner,
      github_repo,
      github_branch,
      github_connection_arn,
    } = environment_variables;

    const { s3_bucket, cloud_front_distribution } =
      control_room_fe_stack_output;

    const sourceOutput = new cdk.aws_codepipeline.Artifact();
    const buildOutput = new cdk.aws_codepipeline.Artifact();

    /**
     * EDGE CASE:
     *
     * There can only be one github source source credential setup per account & region.
     *
     * Since the initial credential was created with env being "stage", we can only run
     * this if the environment is stage.
     */
    if (env === 'stage') {
      new cdk.aws_codebuild.GitHubSourceCredentials(
        this,
        `${id}-github-secret`,
        {
          accessToken: cdk.SecretValue.secretsManager('seon-github-token'),
        },
      );
    }

    const github_source = cdk.aws_codebuild.Source.gitHub({
      owner: github_owner,
      repo: github_repo,
      webhook: true,
      webhookFilters: [
        cdk.aws_codebuild.FilterGroup.inEventOf(
          cdk.aws_codebuild.EventAction.PUSH,
        ).andBranchIs(github_branch),
      ],
    });

    const codebuildRole = new cdk.aws_iam.Role(this, `${id}-codebuild-role`, {
      roleName: `${id}-codebuild-role`,
      assumedBy: new cdk.aws_iam.CompositePrincipal(
        new cdk.aws_iam.ServicePrincipal('codebuild.amazonaws.com'),
        new cdk.aws_iam.ServicePrincipal('codepipeline.amazonaws.com'),
      ),
    });

    codebuildRole.addToPolicy(
      new cdk.aws_iam.PolicyStatement({ resources: ['*'], actions: ['s3:*'] }),
    );

    const buildProject = new cdk.aws_codebuild.Project(
      this,
      `${id}-codebuild`,
      {
        projectName: `${id}-codebuild`,
        role: codebuildRole,
        badge: true,
        source: github_source,
        buildSpec:
          cdk.aws_codebuild.BuildSpec.fromSourceFilename('buildspec.yml'),
        environment: {
          buildImage: cdk.aws_codebuild.LinuxBuildImage.STANDARD_7_0,
        },
        environmentVariables: {
          ENVIRONMENT: {
            value: env,
          },
        },
      },
    );

    const github_source_action =
      new cdk.aws_codepipeline_actions.CodeStarConnectionsSourceAction({
        actionName: 'github-source',
        owner: github_owner,
        repo: github_repo,
        branch: github_branch,
        output: sourceOutput,
        connectionArn: github_connection_arn,
      });

    const manual_approve_action =
      new cdk.aws_codepipeline_actions.ManualApprovalAction({
        actionName: 'build-approval',
      });

    const build_action = new cdk.aws_codepipeline_actions.CodeBuildAction({
      actionName: 'build',
      project: buildProject,
      input: sourceOutput,
      outputs: [buildOutput],
    });

    const s3_deploy_action = new cdk.aws_codepipeline_actions.S3DeployAction({
      actionName: 's3-deployment',
      input: buildOutput,
      bucket: s3_bucket,
      runOrder: 1,
    });

    const invalidateBuildProject = new cdk.aws_codebuild.PipelineProject(
      this,
      `${id}-invalidate-codebuild`,
      {
        projectName: id + `-invalidate-codebuild`,
        buildSpec: cdk.aws_codebuild.BuildSpec.fromObject({
          version: '0.2',
          phases: {
            build: {
              commands: [
                'aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_ID} --paths "/*"',
              ],
            },
          },
        }),
        environmentVariables: {
          CLOUDFRONT_ID: { value: cloud_front_distribution.distributionId },
        },
      },
    );

    invalidateBuildProject.addToRolePolicy(
      new cdk.aws_iam.PolicyStatement({
        resources: [
          `arn:aws:cloudfront::${this.account}:distribution/${cloud_front_distribution.distributionId}`,
        ],
        actions: ['cloudfront:CreateInvalidation'],
      }),
    );

    const invalidate_cloud_front_cache_action =
      new cdk.aws_codepipeline_actions.CodeBuildAction({
        actionName: 'invalidate-cloud-front-cache',
        project: invalidateBuildProject,
        input: buildOutput,
        runOrder: 2,
      });

    const buildCodePipelineStages = (): cdk.aws_codepipeline.StageProps[] => {
      const actions: cdk.aws_codepipeline.StageProps[] = [
        {
          stageName: 'Source',
          actions: [github_source_action],
        },
        {
          stageName: 'Build',
          actions: [build_action],
        },
      ];

      if (isProd(env)) {
        actions.push({
          stageName: 'Approve',
          actions: [manual_approve_action],
        });
      }

      actions.push({
        stageName: 'Deploy',
        actions: [s3_deploy_action, invalidate_cloud_front_cache_action],
      });

      return actions;
    };

    new cdk.aws_codepipeline.Pipeline(this, `${id}-pipeline`, {
      pipelineName: `${id}-pipeline`,
      stages: buildCodePipelineStages(),
    });
  }
}
