import type { Config } from '@jest/types';
import { resolve } from 'path';

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    'utils/(.*)$': resolve(__dirname, './src/utils/$1'),
  },
};

export default config;
