import * as cdk from 'aws-cdk-lib';
import { createResourceName, setMandatoryTags } from '../../utils';

interface SslCertificateProps {
  env: string;
  ssl_certificate_arn: string;
}

const retrievSslCertificate = (
  stack: cdk.Stack,
  props: SslCertificateProps,
): cdk.aws_certificatemanager.ICertificate => {
  const tag_name = createResourceName({
    env: props.env,
    resource: 'ssl-cert',
  });
  const ssl_certificate_from_lookup =
    cdk.aws_certificatemanager.Certificate.fromCertificateArn(
      stack,
      tag_name,
      props.ssl_certificate_arn,
    );
  setMandatoryTags(ssl_certificate_from_lookup, {
    env: props.env,
    name: tag_name,
  });

  return ssl_certificate_from_lookup;
};

export type { SslCertificateProps };
export { retrievSslCertificate };
