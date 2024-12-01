import { getConfigOption } from '@helpers';

import type { IIsExcludedItem } from '@types';

export const isExcludedItem: IIsExcludedItem = (itemPath) => {
  const itemsToExclude = getConfigOption('itemsToExclude');

  return itemsToExclude.some((itemToExclude) => itemPath.includes(itemToExclude));
};
