import config from '@config';

import type { Config } from '@types';

const typedConfig: Config = config;

export const getConfigOption = <K extends keyof Config>(key: K): Config[K] => {
  return typedConfig[key];
};
