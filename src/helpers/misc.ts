import config from '@config';

import type { IConfig } from '@types';

const typedIConfig: IConfig = config;

export const getConfigOption = <K extends keyof IConfig>(key: K): IConfig[K] => {
  return typedIConfig[key];
};
