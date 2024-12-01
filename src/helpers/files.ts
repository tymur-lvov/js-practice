import * as fs from 'fs/promises';
import * as path from 'path';

import { isExcludedItem } from '@helpers';

import type { IExtendWithFileData, IGetFilePathsRecurs } from '@types';

export const getFilePathsRecurs: IGetFilePathsRecurs = async (dirPath) => {
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
      filePathsAcc.push(...(await getFilePathsRecurs(itemPath)));
    }

    return filePathsAcc;
  }, Promise.resolve([]));
};

export const extendWithFileData: IExtendWithFileData = async (filePaths) => {
  return Promise.all(
    filePaths.map(async (filePath) => {
      const fileData = await fs.readFile(filePath, 'utf-8');

      return { filePath, fileData };
    })
  );
};
