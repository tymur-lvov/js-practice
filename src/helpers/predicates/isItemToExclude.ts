import { getConfigOption } from '@helpers';

const itemsToExclude = new Set(getConfigOption('itemsToExclude'));

export const isItemToExclude = (itemName) => {
  return itemsToExclude.has(itemName);
};
