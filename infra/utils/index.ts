import * as cdk from 'aws-cdk-lib';
import { IConstruct } from 'constructs';

const PROJECT_NAME = 'control-room-fe';

interface ResourceTagNameInputs {
  env: string;
  resource: string;
}

const createResourceName = ({
  env,
  resource,
}: ResourceTagNameInputs): string => {
  return `${PROJECT_NAME}-${env}-${resource}`.toLowerCase();
};

interface DomainResourceTagNameInputs extends ResourceTagNameInputs {
  domain_name: string;
}

const createDomainResourceName = ({
  env,
  resource,
  domain_name,
}: DomainResourceTagNameInputs): string => {
  return `${PROJECT_NAME}-${env}-${domain_name}-${resource}`.toLowerCase();
};

interface MandatoryTags {
  env: string;
  name: string;
}

const setMandatoryTags = (construct: IConstruct, tags: MandatoryTags): void => {
  cdk.Tags.of(construct).add('Project', PROJECT_NAME);
  cdk.Tags.of(construct).add('Environment', tags.env);
  cdk.Tags.of(construct).add('Name', tags.name);
};

const isProd = (env: string): boolean => {
  return env === 'prod';
};

export type {
  ResourceTagNameInputs,
  DomainResourceTagNameInputs,
  MandatoryTags,
};
export {
  isProd,
  createResourceName,
  createDomainResourceName,
  setMandatoryTags,
  PROJECT_NAME,
};
