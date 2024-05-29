import * as cdk from 'aws-cdk-lib';
import { createResourceName, setMandatoryTags } from '../../utils';

interface HostedZoneProps {
  env: string;
  hosted_zone_name: string;
}

const retrievHostedZone = (
  stack: cdk.Stack,
  props: HostedZoneProps,
): cdk.aws_route53.IHostedZone => {
  const tag_name = createResourceName({
    env: props.env,
    resource: 'hosted-zone',
  });
  const hosted_zone_from_lookup = cdk.aws_route53.HostedZone.fromLookup(
    stack,
    tag_name,
    {
      domainName: props.hosted_zone_name,
    },
  );
  setMandatoryTags(hosted_zone_from_lookup, {
    env: props.env,
    name: tag_name,
  });

  return hosted_zone_from_lookup;
};

export type { HostedZoneProps };
export { retrievHostedZone };
