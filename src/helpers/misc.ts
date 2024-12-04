import config from '@config';

import type { GetConfigOptionType, GetFilesToExcludeType } from '@types';

export const getConfigOption: GetConfigOptionType = (key) => {
  return config[key];
};

export const getFilesToExclude: GetFilesToExcludeType = () => {
  return getConfigOption('itemsToExclude');
};
