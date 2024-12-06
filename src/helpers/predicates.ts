import { exportDirective, itemsToExclude, tsOrTsxExtensionRegExp } from '@constants';

import type {
  IsEndsWithModuleExtensionType,
  IsFileToIncludeType,
  IsFileType,
  IsIcludesSubStringType,
  IsIncludesExportType,
  IsModuleType,
} from '@types';

export const isIcludesSubString: IsIcludesSubStringType = (string, subString) => {
  return string.includes(subString);
};

export const isFile: IsFileType = (dirItem) => {
  return dirItem.isFile();
};

export const isFileToInclude: IsFileToIncludeType = (filePath: string) => {
  return !itemsToExclude.some((itemToExclude) => filePath.includes(itemToExclude));
};

export const isEndsWithModuleExtension: IsEndsWithModuleExtensionType = (filePath) => {
  return tsOrTsxExtensionRegExp.test(filePath);
};

export const isIncludesExport: IsIncludesExportType = (fileData) => {
  return fileData.includes(exportDirective);
};

export const isModule: IsModuleType = (filePath, fileData) => {
  return isEndsWithModuleExtension(filePath) && isIncludesExport(fileData);
};
