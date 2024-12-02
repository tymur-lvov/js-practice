import * as path from 'path';
import * as fs from 'fs/promises';

import { isFileAModule, getFileEnts } from '@helpers';

import type { IProcessFileData, IProcessFilePath } from '@types';

export const processFilePath: IProcessFilePath = (dirPath) => {
  if (dirPath.includes('@types')) {
    return `${dirPath}/index.types.ts`;
  }

  return `${dirPath}/index.ts`;
};

export const processFileData: IProcessFileData = async (dirPath) => {
  const assignFilePaths = (fileEnts) => {
    return fileEnts.map(({ parentPath, name }) => ({ filePath: path.resolve(parentPath, name) }));
  };

  const assignFilesData = (files) => {
    return Promise.all(
      files.map(async ({ filePath }) => ({
        filePath,
        fileData: await fs.readFile(filePath, 'utf-8'),
      }))
    );
  };

  const filterModules = (files) => {
    return files.filter(({ filePath, fileData }) => isFileAModule(filePath, fileData));
  };

  const res = await asyncCompose(getFileEnts, assignFilePaths, assignFilesData)(dirPath);

  console.log(res);

  return '';
};

const createComposer =
  (mode: 'async' | 'sync') =>
  (...funcs: any[]) =>
  (arg: any) => {
    return mode === 'async'
      ? funcs.reduce(async (result, func) => func(await result), arg)
      : funcs.reduce((result, func) => func(result), arg);
  };

export const compose = createComposer('sync');
export const asyncCompose = createComposer('async');
