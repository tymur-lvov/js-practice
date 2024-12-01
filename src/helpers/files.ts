import * as fs from 'fs/promises';
import * as path from 'path';

import { isExcludedItem } from '@helpers';

import type { IGetAllNestedFilePaths } from '@types';

export const getAllNestedFilePaths: IGetAllNestedFilePaths = async (dirPath) => {
  const dirItems = await fs.readdir(dirPath);

  return dirItems.reduce(async (filePathsAccPromise: Promise<string[]>, dirItem) => {
    const itemPath = path.resolve(dirPath, dirItem);

    if (isExcludedItem(itemPath)) {
      return filePathsAccPromise;
    }

    const itemType = await fs.lstat(itemPath);

    const filePathsAcc = await filePathsAccPromise;

    if (itemType.isFile()) {
      filePathsAcc.push(itemPath);
    } else {
      filePathsAcc.push(...(await getAllNestedFilePaths(itemPath)));
    }

    return filePathsAcc;
  }, Promise.resolve([]));
};
