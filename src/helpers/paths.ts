import { resolve } from 'path';
import { findIndexFileName } from './finders';

export const getPath = (parentPath, name) => {
  return resolve(parentPath, name);
};

export const getFilePaths = (files) => {
  return files.map(({ parentPath, name }) => getPath(parentPath, name));
};

export const getIndexFilePath = (parentPath) => {
  const indexFileName = findIndexFileName(parentPath);

  return getPath(parentPath, indexFileName);
};
