import { isEndsWithModuleExtension, isFileToInclude, isModule } from '@helpers';

import type { FilterFilesType, FilterFilesToIncludeType, FilterModulesType } from '@types';

export const filterFiles: FilterFilesType = (dirItems) => {
  return dirItems.filter((dirItem) => dirItem.isFile());
};

export const filterFilesToInclude: FilterFilesToIncludeType = (files) => {
  return files.filter(({ filePath }) => isFileToInclude(filePath));
};

export const filterModules: FilterModulesType = (files) => {
  return files.filter(({ filePath, fileData }) => {
    return !isEndsWithModuleExtension(filePath) || isModule(filePath, fileData);
  });
};
