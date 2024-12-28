import { basename, resolve } from 'path';
import { findIndexFileName } from './finders';
import { getDirEntsRecurs, readFileData } from './files';
import { applyFilters, asyncCompose, compose } from './composers';
import { getParentDirIndex, splitToParts } from './strings';
import { isEntityAFile, isFileAModule, isFileToBeIncluded } from './predicates';
import { exportDirective, invalidSymbolsRegExp, tsOrTsxExtensionRegExp } from '../constants';
import { filterFiles, filterFilesToInclude, filterModules } from './filters';
import { assignDirEntData } from './builders';

export const appendDotAndSlash = (filePath) => {
  return `./${filePath}`;
};

export const getPath = (parentPath, name) => {
  return resolve(parentPath, name);
};

export const getBasename = (filePath) => {
  return basename(filePath);
};

export const sterilizeBasename = (basename) => {
  return basename.replace(invalidSymbolsRegExp, '');
};

export const getIndexFilePath = (parentPath) => {
  const indexFileName = findIndexFileName(parentPath);

  return getPath(parentPath, indexFileName);
};

export const getRelativePath = (parentPath, filePath) => {
  const pathFromParentDir = sliceFromParentDir(parentPath, filePath);

  return appendDotAndSlash(pathFromParentDir);
};

export const getTargetFiles = async (parentPath) => {
  const dirEnts = await asyncCompose(getDirEntsRecurs, assignDirEntData)(parentPath);

  return compose(filterFiles, filterFilesToInclude, filterModules)(dirEnts);
};

export const getFilePaths = async (parentPath) => {
  const targetFiles = await getTargetFiles(parentPath);

  return targetFiles.map(({ dirEntInfo: { parentPath, name } }) => getPath(parentPath, name));
};

export const sliceFromParentDir = (parentPath, filePath) => {
  const [parentPathParts, filePathParts] = splitToParts('/', parentPath, filePath);
  const parentDirIndex = getParentDirIndex(parentPathParts, filePathParts);

  return filePathParts.slice(parentDirIndex + 1).join('/');
};
