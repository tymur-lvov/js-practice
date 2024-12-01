import { getConfigOption } from '@helpers';

import type { IIsFileEligibleForReExport } from '@types';

export const isFileEligibleForReExport: IIsFileEligibleForReExport = (itemPath) => {
  const itemsToExclude = getConfigOption('itemsToExclude');

  return itemsToExclude.every((itemToExclude) => !itemPath.includes(itemToExclude));
};
