import { basename, resolve } from 'path';
import { findIndexFileName } from './finders';
import { getDirEntsRecurs } from './files';
import { compose } from './composers';
import { filterFiles, filterFilesToInclude } from './filters';
import { getParentDirIndex, splitStringsToParts } from './strings';

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
  const [parentPathParts, filePathParts] = splitStringsToParts('/', parentPath, filePath);

  const parentDirIndex = getParentDirIndex(parentPathParts, filePathParts);

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

  return files.map(({ parentPath, name }) => getPath(parentPath, name));
};

export const getIndexFilePath = (parentPath) => {
  const indexFileName = findIndexFileName(parentPath);

  return getPath(parentPath, indexFileName);
};
