import { exportDirective, tsOrTsxExtensionRegExp, typesDirOrFileNameRegExp } from '@constants';

import { getConfigOption } from '@helpers';

import type {
  IIsModule,
  IIsTypesPath,
  IIsTypeModule,
  IIsNamedModule,
  IIsEntityAFile,
  IIsFileAModule,
  IIsDefaultModule,
  IIsFileToBeIncluded,
  IIsItemToBeExcluded,
  IIsFindDirEntDataError,
  IIsFindIndexFileNameError,
  IIsFindExportStatementError,
  IIsEndsWithTsOrTsxExtension,
} from '@types';

export const isEntityAFile: IIsEntityAFile = (dirEnt) => {
  return dirEnt.isFile();
};

export const isModule: IIsModule = (fileData) => {
  return fileData.includes(exportDirective);
};

export const isFindIndexFileNameError: IIsFindIndexFileNameError = (reason) => {
  return reason === '!findIndexFileName';
};

export const isFindExportStatementError: IIsFindExportStatementError = (reason) => {
  return reason === '!findExportStatement';
};

export const isFindDirEntDataError: IIsFindDirEntDataError = (reason) => {
  return reason === '!findDirEntData';
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
  const itemsToExclude = getConfigOption('itemsToExclude');

  return !itemsToExclude.some((item) => isItemToBeExcluded(parentPath, name, item));
};
