import { produceIndexFileData, produceIndexFilePath } from '@helpers';

import type { CreateIndexFilesType } from '@types';

export const createIndexFiles: CreateIndexFilesType = async (dirPaths) => {
  return Promise.all(
    dirPaths.map(async (dirPath) => {
      return {
        filePath: produceIndexFilePath(dirPath),
        fileData: await produceIndexFileData(dirPath),
      };
    })
  );
};
