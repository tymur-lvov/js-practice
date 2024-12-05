import {
  assignFilePaths,
  assignFilesData,
  filterFilesToInclude,
  filterModules,
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

  const filesWithPaths = assignFilePaths(files);

  const filesToInclude = filterFilesToInclude(filesWithPaths);

  const filesWithData = await assignFilesData(filesToInclude);

  const modules = filterModules(filesWithData);

  console.log(modules);

  return [{ filePath: '', fileData: '' }];
};
