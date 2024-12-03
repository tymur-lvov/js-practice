import config from '@config';

import type { GetConfigOptionType } from '@types';

export const getConfigOption: GetConfigOptionType = (key) => {
  return config[key];
};
