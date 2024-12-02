import config from '@config';

const typedConfig = config;

export const getConfigOption = (key) => {
  return typedConfig[key];
};
