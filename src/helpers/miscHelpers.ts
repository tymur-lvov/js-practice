import config from '@config';

import { Config } from '@types';

const typedConfig: Config = config;

export const getConfigProp = <K extends keyof Config>(prop: K): Config[K] => {
  return typedConfig[prop];
};
