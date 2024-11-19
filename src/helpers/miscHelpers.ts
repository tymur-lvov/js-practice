import config from '@config';

import { Config } from '@types';

const typedConfig: Config = config;

export const getConfigProperty = <K extends keyof Config>(property: K): Config[K] => {
  return typedConfig[property];
};
