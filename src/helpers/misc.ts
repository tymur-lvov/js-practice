import config from '../config.json';

export const getItemsToExclude = () => {
  return config.itemsToExclude;
};
