import { itemsToExclude } from '@constants';

import type {
  IsEndsWithModuleExtensionType,
  IsFileToIncludeType,
  IsIncludesExportType,
  IsModuleType,
} from '@types';

export const isFileToInclude: IsFileToIncludeType = (filePath: string) => {
  return !itemsToExclude.some((itemToExclude) => filePath.includes(itemToExclude));
};

export const isEndsWithModuleExtension: IsEndsWithModuleExtensionType = (filePath) => {
  return /\.(ts|tsx)$/.test(filePath);
};

export const isIncludesExport: IsIncludesExportType = (fileData) => {
  return fileData.includes('export ');
};

export const isModule: IsModuleType = (filePath, fileData) => {
  return isEndsWithModuleExtension(filePath) && isIncludesExport(fileData);
};
