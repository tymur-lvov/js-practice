import config from '@config';

import type { IConfig, IGetConfigOption } from '@types';

export const getConfigOption: IGetConfigOption = (key) => {
  const typedConfig: IConfig = config;

  return typedConfig[key];
};
