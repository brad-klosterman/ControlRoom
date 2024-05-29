import * as cdk from 'aws-cdk-lib';
import { createDomainResourceName } from '../../utils';

interface AliasRecordProps {
  env: string;
  domain: string;
  hosted_zone: cdk.aws_route53.IHostedZone;
  cloud_front_distribution: cdk.aws_cloudfront.IDistribution;
}

const createAliasRecord = (
  stack: cdk.Stack,
  props: AliasRecordProps,
): cdk.aws_route53.ARecord => {
  const alarm_dns_a_record = new cdk.aws_route53.ARecord(
    stack,
    createDomainResourceName({
      env: props.env,
      domain_name: props.domain,
      resource: 'a-record',
    }),
    {
      comment: `A record for ${props.domain}.`,
      zone: props.hosted_zone,
      target: cdk.aws_route53.RecordTarget.fromAlias(
        new cdk.aws_route53_targets.CloudFrontTarget(
          props.cloud_front_distribution,
        ),
      ),
      recordName: props.domain,
    },
  );
  alarm_dns_a_record.node.addDependency(props.hosted_zone);

  return alarm_dns_a_record;
};

export type { AliasRecordProps };
export { createAliasRecord };
