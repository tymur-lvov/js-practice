import { tsOrTsxExtensionRegExp, typesDirOrFileNameRegExp } from '../constants';
import { getItemsToExclude } from './misc';

export const isEntityAFile = (dirEnt) => {
  return dirEnt.isFile();
};

export const isFileToBeIncluded = ({ parentPath, name }) => {
  const itemsToExclude = getItemsToExclude();

  return !itemsToExclude.some((item) => parentPath.includes(item) || name === item);
};

export const isTypesPath = (path) => {
  return typesDirOrFileNameRegExp.test(path);
};

export const isEndsWithTsOrTsxExtension = (path) => {
  return tsOrTsxExtensionRegExp.test(path);
};

export const isModule = (filePath) => {
  return isEndsWithTsOrTsxExtension(filePath) && !isTypesPath(filePath);
};

export const isTypeModule = (filePath) => {
  return isEndsWithTsOrTsxExtension(filePath) && isTypesPath(filePath);
};

export const isDefaultModule = (filePath) => {
  return !isEndsWithTsOrTsxExtension(filePath);
};
