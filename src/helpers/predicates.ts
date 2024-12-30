import type {
  IIsDefaultModule,
  IIsEndsWithTsOrTsxExtension,
  IIsEntityAFile,
  IIsFileAModule,
  IIsFileToBeIncluded,
  IIsItemToBeExcluded,
  IIsModule,
  IIsNamedModule,
  IIsTypeModule,
  IIsTypesPath,
} from '../../@types/helpers.types';
import { exportDirective, tsOrTsxExtensionRegExp, typesDirOrFileNameRegExp } from '../constants';
import { getItemsToExclude } from './misc';

export const isEntityAFile: IIsEntityAFile = (dirEnt) => {
  return dirEnt.isFile();
};

export const isModule: IIsModule = (fileData) => {
  return fileData.includes(exportDirective);
};

export const isItemToBeExcluded: IIsItemToBeExcluded = (parentPath, name, item) => {
  return parentPath.includes(item) || name === item;
};

export const isFileAModule: IIsFileAModule = (fileName, fileData) => {
  return isDefaultModule(fileName) || isModule(fileData);
};

export const isTypesPath: IIsTypesPath = (path) => {
  return typesDirOrFileNameRegExp.test(path);
};

export const isEndsWithTsOrTsxExtension: IIsEndsWithTsOrTsxExtension = (path) => {
  return tsOrTsxExtensionRegExp.test(path);
};

export const isDefaultModule: IIsDefaultModule = (filePath) => {
  return !isEndsWithTsOrTsxExtension(filePath);
};

export const isNamedModule: IIsNamedModule = (filePath) => {
  return isEndsWithTsOrTsxExtension(filePath) && !isTypesPath(filePath);
};

export const isTypeModule: IIsTypeModule = (filePath) => {
  return isEndsWithTsOrTsxExtension(filePath) && isTypesPath(filePath);
};

export const isFileToBeIncluded: IIsFileToBeIncluded = ({ parentPath, name }) => {
  return !getItemsToExclude().some((item) => isItemToBeExcluded(parentPath, name, item));
};
