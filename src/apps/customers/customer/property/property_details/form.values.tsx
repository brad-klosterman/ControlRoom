import {
  CUSTOMER_PROFILE_PROPERTY_FRAGMENT,
  UPDATE_PROPERTY_DETAILS_PARAMS,
  PROPERTY_INSTRUCTION_TYPE,
  PROPERTY_TYPE,
  PROPERTY_PROFILE_INSTRUCTIONS_FRAGMENT,
} from 'codegen/graphql';

export const setForm = (
  property: CUSTOMER_PROFILE_PROPERTY_FRAGMENT,
): UPDATE_PROPERTY_DETAILS_PARAMS => {
  return {
    code: property?.code || null,
    coordinates: property.geospatial?.coordinates || null,
    description: property.description,
    entire_address: property?.geospatial?.entire_address || null,
    instructions:
      property?.instructions as PROPERTY_PROFILE_INSTRUCTIONS_FRAGMENT,
    name: property?.name ?? '',
    password: property?.password,
    duress_password: property?.duress_password,
    type: property?.type ?? 'RESIDENTIAL',
  };
};

export interface IOptionInstruction {
  label: string;
  value: PROPERTY_INSTRUCTION_TYPE;
}

export const PROPERTY_INSTRUCTION_TYPES_OPTIONS: IOptionInstruction[] = [
  {
    label: 'AGENT',
    value: 'AGENT',
  },
  {
    label: 'NOTE',
    value: 'NOTE',
  },
  {
    label: 'RESPONDER',
    value: 'RESPONDER',
  },
  {
    label: 'KEY',
    value: 'KEY',
  },
];

export interface IOptionPropertyType {
  label: string;
  value: PROPERTY_TYPE;
}

export const PROPERTY_TYPE_OPTIONS: IOptionPropertyType[] = [
  {
    label: 'RESIDENTIAL',
    value: 'RESIDENTIAL',
  },
  {
    label: 'BUSINESS',
    value: 'BUSINESS',
  },
];

export const PROPERTY_TESTING_TIME_OPTIONS = [
  {
    label: '15 minutes',
    value: '15',
  },
  {
    label: '30 minutes',
    value: '30',
  },
  {
    label: '60 minutes',
    value: '60',
  },
  {
    label: '90 minutes',
    value: '90',
  },
];
