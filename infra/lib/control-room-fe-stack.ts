import * as cdk from 'aws-cdk-lib';
import { CdkEnviornmentVariables } from '../env';
import { retrievHostedZone } from './control-room-fe-resources/hosted-zone';
import {
  createBucket,
  deployBucket,
} from './control-room-fe-resources/s3-bucket';
import { createCloudFrontDistribution } from './control-room-fe-resources/cloud-front';
import { createAliasRecord } from './control-room-fe-resources/alias-record';
import { retrievSslCertificate } from './control-room-fe-resources/ssl-certificate';

export class ControlRoomFeStack extends cdk.Stack {
  readonly s3_bucket: cdk.aws_s3.IBucket;
  readonly cloud_front_distribution: cdk.aws_cloudfront.IDistribution;

  constructor(
    scope: cdk.App,
    id: string,
    environment_variables: CdkEnviornmentVariables,
    props?: cdk.StackProps,
  ) {
    super(scope, id, props);

    const { env, domain, hosted_zone_name, ssl_certificate_arn } =
      environment_variables;

    const ssl_certificate = retrievSslCertificate(this, {
      env,
      ssl_certificate_arn,
    });

    const hosted_zone = retrievHostedZone(this, {
      env,
      hosted_zone_name,
    });

    const s3_bucket = createBucket(this, {
      env,
      domain,
    });

    const cloud_front_distribution = createCloudFrontDistribution(this, {
      env,
      domain,
      s3_bucket,
      ssl_certificate,
    });

    createAliasRecord(this, {
      env,
      domain,
      hosted_zone,
      cloud_front_distribution,
    });

    deployBucket(this, {
      env,
      s3_bucket,
      cloud_front_distribution,
    });

    this.s3_bucket = s3_bucket;
    this.cloud_front_distribution = cloud_front_distribution;
  }
}
