import { basename, resolve } from 'path';
import { findIndexFileName } from './finders';
import { getDirEntsRecurs } from './files';
import { applyFilters } from './composers';
import { getParentDirIndex, splitToParts } from './strings';
import { isEntityAFile, isFileToBeIncluded } from './predicates';
import { invalidSymbolsRegExp } from '../constants';

export const getPath = (parentPath, name) => {
  return resolve(parentPath, name);
};

export const getBasename = (filePath) => {
  return basename(filePath);
};

export const sterilizeBasename = (basename) => {
  return basename.replace(invalidSymbolsRegExp, '');
};

export const sliceFromParentDir = (parentPath, filePath) => {
  const [parentPathParts, filePathParts] = splitToParts('/', parentPath, filePath);

  return filePathParts.slice(getParentDirIndex(parentPathParts, filePathParts) + 1).join('/');
};

export const appendDotAndSlash = (filePath) => {
  return `./${filePath}`;
};

export const getRelativePath = (parentPath, filePath) => {
  return appendDotAndSlash(sliceFromParentDir(parentPath, filePath));
};

export const getFilePaths = async (parentPath) => {
  const files = applyFilters(isEntityAFile, isFileToBeIncluded)(await getDirEntsRecurs(parentPath));

  return files.map(({ parentPath, name }) => getPath(parentPath, name));
};

export const getIndexFilePath = (parentPath) => {
  return getPath(parentPath, findIndexFileName(parentPath));
};
