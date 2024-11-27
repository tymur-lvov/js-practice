import config from '@config';

import type { IConfig } from '@types';

const typedConfig: IConfig = config;

export const getConfigOption = <K extends keyof IConfig>(key: K): IConfig[K] => {
  return typedConfig[key];
};
