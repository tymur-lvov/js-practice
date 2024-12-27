import { tsOrTsxExtensionRegExp, typesDirOrFileNameRegExp } from '../constants';
import { getItemsToExclude } from './misc';

export const isEntityAFile = (dirEnt) => {
  return dirEnt.isFile();
};

export const isItemToBeExcluded = (parentPath, name, item) => {
  return parentPath.includes(item) || name === item;
};

export const isTypesPath = (path) => {
  return typesDirOrFileNameRegExp.test(path);
};

export const isEndsWithTsOrTsxExtension = (path) => {
  return tsOrTsxExtensionRegExp.test(path);
};

export const isDefaultModule = (filePath) => {
  return !isEndsWithTsOrTsxExtension(filePath);
};

export const isModule = (filePath) => {
  return isEndsWithTsOrTsxExtension(filePath) && !isTypesPath(filePath);
};

export const isTypeModule = (filePath) => {
  return isEndsWithTsOrTsxExtension(filePath) && isTypesPath(filePath);
};

export const isFileToBeIncluded = ({ parentPath, name }) => {
  return !getItemsToExclude().some((item) => isItemToBeExcluded(parentPath, name, item));
};
