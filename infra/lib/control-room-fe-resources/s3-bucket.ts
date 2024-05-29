import * as cdk from 'aws-cdk-lib';
import { createResourceName, setMandatoryTags } from '../../utils';

interface BucketProps {
  env: string;
  domain: string;
}

const createBucket = (
  stack: cdk.Stack,
  props: BucketProps,
): cdk.aws_s3.IBucket => {
  const tag_name = createResourceName({
    env: props.env,
    resource: 'bucket',
  });
  const control_room_fe_bucket = new cdk.aws_s3.Bucket(stack, tag_name, {
    bucketName: props.domain,
    websiteIndexDocument: 'index.html',
    websiteErrorDocument: 'index.html',
    removalPolicy: cdk.RemovalPolicy.DESTROY,
    publicReadAccess: true,
    blockPublicAccess: {
      blockPublicAcls: false,
      blockPublicPolicy: false,
      ignorePublicAcls: false,
      restrictPublicBuckets: false,
    },
  });
  setMandatoryTags(control_room_fe_bucket, {
    env: props.env,
    name: tag_name,
  });

  return control_room_fe_bucket;
};

interface BucketDeploymentProps {
  env: string;
  s3_bucket: cdk.aws_s3.IBucket;
  cloud_front_distribution: cdk.aws_cloudfront.IDistribution;
}

const deployBucket = (
  stack: cdk.Stack,
  props: BucketDeploymentProps,
): cdk.aws_s3_deployment.BucketDeployment => {
  const tag_name = createResourceName({
    env: props.env,
    resource: 'bucket-deployment',
  });
  const control_room_fe_bucket_deployment =
    new cdk.aws_s3_deployment.BucketDeployment(stack, tag_name, {
      sources: [cdk.aws_s3_deployment.Source.asset('./dist')],
      destinationBucket: props.s3_bucket,
      distribution: props.cloud_front_distribution,
      distributionPaths: ['/*'],
    });
  setMandatoryTags(control_room_fe_bucket_deployment, {
    env: props.env,
    name: tag_name,
  });

  return control_room_fe_bucket_deployment;
};

export type { BucketProps, BucketDeploymentProps };
export { createBucket, deployBucket };
