import { basename, resolve } from 'path';

import { invalidSymbolsRegExp } from '@constants';

import {
  compose,
  filterFiles,
  splitToParts,
  asyncCompose,
  getDirEntsRecurs,
  getParentDirIndex,
  findIndexFileName,
  filterFilesToInclude,
} from '@helpers';

import type {
  IGetPath,
  IGetBasename,
  IGetFilePaths,
  IGetTargetFiles,
  IGetIndexFilePath,
  ISterilizeBasename,
  IAppendDotAndSlash,
  GetRelativePathType,
  ISliceFromParentDir,
} from '@types';

export const appendDotAndSlash: IAppendDotAndSlash = (filePath) => {
  return `./${filePath}`;
};

export const getPath: IGetPath = (parentPath, name = '') => {
  return resolve(parentPath, name);
};

export const getBasename: IGetBasename = (filePath) => {
  return basename(filePath);
};

export const sterilizeBasename: ISterilizeBasename = (basename) => {
  return basename.replace(invalidSymbolsRegExp, '');
};

export const getIndexFilePath: IGetIndexFilePath = (parentPath) => {
  const indexFileName = findIndexFileName(parentPath);

  return getPath(parentPath, indexFileName);
};

export const getRelativePath: GetRelativePathType = (parentPath, filePath) => {
  const pathFromParentDir = sliceFromParentDir(parentPath, filePath);

  return appendDotAndSlash(pathFromParentDir);
};

export const getTargetFiles: IGetTargetFiles = async (rawParentPath) => {
  const dirEnts = await asyncCompose(getPath, getDirEntsRecurs)(rawParentPath);

  return compose(filterFiles, filterFilesToInclude)(dirEnts);
};

export const getFilePaths: IGetFilePaths = async (parentPath) => {
  const targetFiles = await getTargetFiles(parentPath);

  return targetFiles.map(({ parentPath, name }) => getPath(parentPath, name));
};

export const sliceFromParentDir: ISliceFromParentDir = (parentPath, filePath) => {
  const [parentPathParts, filePathParts] = splitToParts('/', parentPath, filePath);
  const parentDirIndex = getParentDirIndex(parentPathParts, filePathParts);

  return filePathParts.slice(parentDirIndex + 1).join('/');
};
