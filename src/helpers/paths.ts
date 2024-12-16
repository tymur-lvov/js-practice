import { resolve } from 'path';
import { findIndexFileName } from './finders';

export const getPath = (parentPath, name) => {
  return resolve(parentPath, name);
};

export const getIndexFilePath = (parentPath) => {
  const indexFileName = findIndexFileName(parentPath);

  const filePath = getPath(parentPath, indexFileName);

  return { filePath };
};
