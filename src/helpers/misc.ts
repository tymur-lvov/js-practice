import type {
  IGetIndexFileName,
  IGetItemsToExclude,
  IGetParentPaths,
  IGetTypesIndexFileName,
} from '../../@types/helpers.types';
import config from '../config.json';
import { indexFileName, typesIndexFileName } from '../constants';

export const getParentPaths: IGetParentPaths = () => {
  return config.parentPaths;
};

export const getItemsToExclude: IGetItemsToExclude = () => {
  return config.itemsToExclude;
};

export const getIndexFileName: IGetIndexFileName = () => {
  return indexFileName;
};

export const getTypesIndexFileName: IGetTypesIndexFileName = () => {
  return typesIndexFileName;
};
