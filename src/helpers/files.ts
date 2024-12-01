import * as fs from 'fs/promises';
import * as path from 'path';

import { isFileEligibleForReExport } from '@helpers';

import type { IGetNestedFilePathsRecurs } from '@types';

export const getNestedFilePathsRecurs: IGetNestedFilePathsRecurs = async (dirPath) => {
  const dirItems = await fs.readdir(dirPath);

  const res = await dirItems.reduce(async (filePathsAccPromise: Promise<string[]>, dirItem) => {
    const itemPath = path.resolve(dirPath, dirItem);
    const itemType = await fs.lstat(itemPath);

    const filePathsAcc = await filePathsAccPromise;

    if (itemType.isFile()) {
      const filePath = itemPath;

      if (isFileEligibleForReExport(filePath)) {
        // Consider assign to separate filter process
        filePathsAcc.push(filePath);
      }
    } else {
      filePathsAcc.push(...(await getNestedFilePathsRecurs(itemPath)));
    }

    return filePathsAcc;
  }, Promise.resolve([]));

  return res;
};
