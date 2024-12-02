import * as fs from 'fs/promises';
import * as path from 'path';

import { isItemToExclude } from '@helpers';

export const processFilePaths = async (dirPath) => {
  const dirItems = await fs.readdir(dirPath, { withFileTypes: true });

  return dirItems.reduce(async (filesAccPromise, dirItem) => {
    const { name: itemName, parentPath: itemParentPath } = dirItem;

    if (isItemToExclude(itemName)) {
      return filesAccPromise;
    }

    const itemPath = path.resolve(itemParentPath, itemName);

    const filesAcc = await filesAccPromise;

    if (dirItem.isFile()) {
      filesAcc.push(itemPath);
    } else {
      filesAcc.push(...(await processFilePaths(itemPath)));
    }

    return filesAcc;
  }, Promise.resolve([]) as Promise<string[]>);
};
