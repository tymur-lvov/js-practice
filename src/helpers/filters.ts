import type { FilterFilesType, FilterFilesToIncludeType } from '@types';

export const filterFiles: FilterFilesType = (dirItems) => {
  return dirItems.filter((dirItem) => dirItem.isFile());
};

export const filterFilesToInclude: FilterFilesToIncludeType = (files, itemsToExclude) => {
  return files.filter(({ parentPath, name }) => {
    return !itemsToExclude.some((itemToExclude) => {
      return parentPath.includes(itemToExclude) || name === itemToExclude;
    });
  });
};
