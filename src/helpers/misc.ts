import config from '../config.json';

export const getParentPaths = () => {
  return config.parentPaths;
};

export const getItemsToExclude = () => {
  return config.itemsToExclude;
};
