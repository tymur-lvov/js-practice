import config from '@config';

import { Config } from '@types';

export const readConfig = <K extends keyof Config>(property: K): Config[K] => {
  const typedConfig: Config = config;

  return typedConfig[property];
};
