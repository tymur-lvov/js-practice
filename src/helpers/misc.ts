import config from '../config.json';
import { indexFileName, typesIndexFileName } from '../constants';

export const getParentPaths = () => {
  return config.parentPaths;
};

export const getItemsToExclude = () => {
  return config.itemsToExclude;
};

export const getIndexFileName = () => {
  return indexFileName;
};

export const getTypesIndexFileName = () => {
  return typesIndexFileName;
};
