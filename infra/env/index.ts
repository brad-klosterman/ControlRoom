import * as cdk from 'aws-cdk-lib';
import * as cdk_json_file from '../../cdk.json';

// Get the intersection of the json variables for both stage and prod to ensure
// safe environment variables to produce compile-time instead of run-time errors.
type CdkEnviornmentVariables =
  | typeof cdk_json_file.context.prod
  | typeof cdk_json_file.context.stage;

const getCdkEnvironmentVariables = (
  scope: cdk.App,
): CdkEnviornmentVariables => {
  const env: unknown = scope.node.tryGetContext('config');

  if (!env) {
    throw new Error(
      "Context variables missing on CDK command. Pass in as '-c config=XXX`",
    );
  }

  if (typeof env !== 'string') {
    throw new Error(
      "Context variable type mistmatch on CDK command. Value for '-c config=XXX` MUST be a string.",
    );
  }

  const env_variables = scope.node.tryGetContext(env) as unknown;

  if (!env_variables || typeof env_variables !== 'object') {
    throw new Error(
      'Context variable type mistmatch on CDK command. Ensure environment value in `cdk.json` for given environment is of an object key:value pair.',
    );
  }

  // Safe to cast, since we are retrieving these indrectly from the same file
  return env_variables as CdkEnviornmentVariables;
};

export type { CdkEnviornmentVariables };
export { getCdkEnvironmentVariables };
