import * as cdk from 'aws-cdk-lib';
import { createResourceName, setMandatoryTags } from '../../utils';

interface CloudFronProps {
  env: string;
  domain: string;
  s3_bucket: cdk.aws_s3.IBucket;
  ssl_certificate: cdk.aws_certificatemanager.ICertificate;
}

const createCloudFrontDistribution = (
  stack: cdk.Stack,
  props: CloudFronProps,
): cdk.aws_cloudfront.IDistribution => {
  const tag_name = createResourceName({
    env: props.env,
    resource: 'cloud-front',
  });
  const cloud_front_distribution = new cdk.aws_cloudfront.Distribution(
    stack,
    tag_name,
    {
      defaultBehavior: {
        origin: new cdk.aws_cloudfront_origins.S3Origin(props.s3_bucket),
        cachePolicy: new cdk.aws_cloudfront.CachePolicy(
          stack,
          createResourceName({
            env: props.env,
            resource: 'cloud-front-cache-policy',
          }),
          {
            minTtl: cdk.Duration.seconds(1),
            maxTtl: cdk.Duration.hours(1),
            defaultTtl: cdk.Duration.minutes(5),
          },
        ),
        responseHeadersPolicy: new cdk.aws_cloudfront.ResponseHeadersPolicy(
          stack,
          createResourceName({
            env: props.env,
            resource: 'cloud-front-response-policy',
          }),
          {
            customHeadersBehavior: {
              customHeaders: [
                {
                  header: 'Cache-Control',
                  value: 'max-age=60',
                  override: true,
                },
              ],
            },
          },
        ),
      },
      domainNames: [props.domain],
      certificate: props.ssl_certificate,
    },
  );
  setMandatoryTags(cloud_front_distribution, {
    env: props.env,
    name: tag_name,
  });

  return cloud_front_distribution;
};

export type { CloudFronProps };
export { createCloudFrontDistribution };
