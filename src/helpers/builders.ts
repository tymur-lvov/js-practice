import {
  filterFilesToInclude,
  getFiles,
  getFilesToExclude,
  produceIndexFileData,
  produceIndexFilePath,
} from '@helpers';

import type { CreateIndexFilesType, CreateTargetFilesType } from '@types';

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

export const createTargetFiles: CreateTargetFilesType = async (dirPath) => {
  const files = await getFiles(dirPath);

  const itemsToExclude = getFilesToExclude();
  const targetFiles = filterFilesToInclude(files, itemsToExclude);

  console.log(targetFiles);

  return [{ filePath: '', fileData: '' }];
};
