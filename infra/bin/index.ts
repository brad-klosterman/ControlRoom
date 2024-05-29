import * as cdk from 'aws-cdk-lib';
import { ControlRoomFeStack } from '../lib/control-room-fe-stack';
import { getCdkEnvironmentVariables } from '../env';
import { PROJECT_NAME } from '../utils';
import { ControlRoomFeCiCdStack } from '../lib/control-room-cicd-stack';

const cdk_stack_props: cdk.StackProps = {
  env: { account: '894556524073', region: 'eu-central-1' },
};

const app = new cdk.App();
const cdk_environment_variables = getCdkEnvironmentVariables(app);

const control_room_fe_stack = new ControlRoomFeStack(
  app,
  `${PROJECT_NAME}-${cdk_environment_variables.env}-stack`,
  cdk_environment_variables,
  cdk_stack_props,
);

new ControlRoomFeCiCdStack(
  app,
  `${PROJECT_NAME}-cicd-${cdk_environment_variables.env}-stack`,
  {
    s3_bucket: control_room_fe_stack.s3_bucket,
    cloud_front_distribution: control_room_fe_stack.cloud_front_distribution,
  },
  cdk_environment_variables,
  cdk_stack_props,
);
