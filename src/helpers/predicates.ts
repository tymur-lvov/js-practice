import { getConfigOption } from '@helpers';

import type { IIsItemToExclude, IIsFileAModule } from '@types';

export const isItemToExclude: IIsItemToExclude = (itemPath) => {
  const itemsToExclude = getConfigOption('itemsToExclude');

  return itemsToExclude.some((itemToExclude) => itemPath.includes(itemToExclude));
};

export const isFileAModule: IIsFileAModule = (filePath, fileData) => {
  if (/\.(ts|tsx)$/.test(filePath)) {
    return fileData.includes('export');
  }

  return true;
};
