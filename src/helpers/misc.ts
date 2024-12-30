import type {
  GetIndexFileNameType,
  GetItemsToExcludeType,
  GetParentPathsType,
  GetTypesIndexFileNameType,
} from '../../@types/helpers.types';
import config from '../config.json';
import { indexFileName, typesIndexFileName } from '../constants';

export const getParentPaths: GetParentPathsType = () => {
  return config.parentPaths;
};

export const getItemsToExclude: GetItemsToExcludeType = () => {
  return config.itemsToExclude;
};

export const getIndexFileName: GetIndexFileNameType = () => {
  return indexFileName;
};

export const getTypesIndexFileName: GetTypesIndexFileNameType = () => {
  return typesIndexFileName;
};
