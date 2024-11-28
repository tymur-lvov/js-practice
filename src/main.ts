import * as path from 'path';

import { asyncCompose, filterFiles, getConfigOption, getDirEntsRecurs } from '@helpers';

import type { Dirent } from 'fs';

const main = async () => {
  const reExportFiles = await createReExportFiles();
  console.log(reExportFiles);
};

const createReExportFiles = async () => {
  const targetDirPaths = getConfigOption('targetDirPaths');

  const files = await getFiles(targetDirPaths);

  return files.map((files, idx) => ({
    srcPath: createSrcPath(targetDirPaths[idx]),
    fileData: files.map(getFileData),
  }));
};

const getFiles = async (dirPaths: string[]) => {
  return Promise.all(dirPaths.map(asyncCompose(getDirEntsRecurs, filterFiles)));
};

const createSrcPath = (dirPath: string) => {
  return `${path.resolve(dirPath)}/index.ts`;
};

const getFileData = (file: Dirent) => {};

main();
