import type { IFilterModules } from '@types';

export const filterModules: IFilterModules = (files) => {
  return files.filter(({ filePath, fileData }) => {
    if (/\.(ts|tsx)$/.test(filePath)) {
      return fileData.includes('export');
    }

    return true;
  });
};
