import config from '@config';

import type { IConfig, IGetConfigOption } from '@types';

const typedConfig: IConfig = config;

export const getConfigOption: IGetConfigOption = (key) => {
  return typedConfig[key];
};
