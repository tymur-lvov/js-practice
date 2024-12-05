import { isEndsWithModuleExtension, isFile, isFileToInclude, isModule } from '@helpers';

import type { FilterFilesType, FilterFilesToIncludeType, FilterModulesType } from '@types';

export const filterFiles: FilterFilesType = (dirItems) => {
  return dirItems.filter((dirItem) => isFile(dirItem));
};

export const filterFilesToInclude: FilterFilesToIncludeType = (files) => {
  return files.filter(({ filePath }) => isFileToInclude(filePath));
};

export const filterModules: FilterModulesType = (files) => {
  return files.filter(({ filePath, fileData }) => {
    return !isEndsWithModuleExtension(filePath) || isModule(filePath, fileData as string);
  });
};
