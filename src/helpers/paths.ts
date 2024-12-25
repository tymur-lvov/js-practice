import { basename, resolve } from 'path';
import { findIndexFileName } from './finders';
import { getDirEntsRecurs } from './files';
import { compose } from './composers';
import { filterFiles, filterFilesToInclude } from './filters';

export const getPath = (parentPath, name) => {
  return resolve(parentPath, name);
};

export const getBasename = (filePath) => {
  return basename(filePath);
};

export const sterilizeBasename = (basename) => {
  return basename.replace(/[^a-zA-Z0-9$_]/g, '');
};

export const sliceFilePathFromParentDir = (parentPath, filePath) => {
  const parentPathParts = parentPath.split('/');
  const filePathParts = filePath.split('/');

  const parentDir = parentPathParts[parentPathParts.length - 1];
  const parentDirIndex = filePathParts.indexOf(parentDir);

  return filePathParts.slice(parentDirIndex + 1).join('/');
};

export const transformToRelativePath = (filePath) => {
  return `./${filePath}`;
};

export const getRelativePath = (parentPath, filePath) => {
  const slicedFilePath = sliceFilePathFromParentDir(parentPath, filePath);

  return transformToRelativePath(slicedFilePath);
};

export const getFilePaths = async (parentPath) => {
  const dirEnts = await getDirEntsRecurs(parentPath);

  const files = compose(filterFiles, filterFilesToInclude)(dirEnts);

  return files.map(getPath);
};

export const getIndexFilePath = (parentPath) => {
  const indexFileName = findIndexFileName(parentPath);

  return getPath(parentPath, indexFileName);
};
