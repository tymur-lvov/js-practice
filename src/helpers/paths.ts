import { basename, resolve } from 'path';
import { findIndexFileName } from './finders';
import { getDirEntsRecurs } from './files';
import { asyncCompose, compose } from './composers';
import { getParentDirIndex, splitToParts } from './strings';
import { invalidSymbolsRegExp } from '../constants';
import { filterFiles, filterFilesToInclude, filterModules } from './filters';
import { assignDirEntData } from './builders';
import type {
  AppendDotAndSlashType,
  GetBasenameType,
  GetFilePathsType,
  GetIndexFilePathType,
  GetPathType,
  GetRelativePathType,
  GetTargetFilesType,
  SliceFromParentDirType,
  SterilizeBasenameType,
} from '../../@types/helpers.types';

export const appendDotAndSlash: AppendDotAndSlashType = (filePath) => {
  return `./${filePath}`;
};

export const getPath: GetPathType = (parentPath, name) => {
  return resolve(parentPath, name);
};

export const getBasename: GetBasenameType = (filePath) => {
  return basename(filePath);
};

export const sterilizeBasename: SterilizeBasenameType = (basename) => {
  return basename.replace(invalidSymbolsRegExp, '');
};

export const getIndexFilePath: GetIndexFilePathType = (parentPath) => {
  const indexFileName = findIndexFileName(parentPath);

  return getPath(parentPath, indexFileName);
};

export const getRelativePath: GetRelativePathType = (parentPath, filePath) => {
  const pathFromParentDir = sliceFromParentDir(parentPath, filePath);

  return appendDotAndSlash(pathFromParentDir);
};

export const getTargetFiles: GetTargetFilesType = async (parentPath) => {
  const dirEnts = await asyncCompose(getDirEntsRecurs, assignDirEntData)(parentPath);

  return compose(filterFiles, filterFilesToInclude, filterModules)(dirEnts);
};

export const getFilePaths: GetFilePathsType = async (parentPath) => {
  const targetFiles = await getTargetFiles(parentPath);

  return targetFiles.map(({ dirEntInfo: { parentPath, name } }) => getPath(parentPath, name));
};

export const sliceFromParentDir: SliceFromParentDirType = (parentPath, filePath) => {
  const [parentPathParts, filePathParts] = splitToParts('/', parentPath, filePath);
  const parentDirIndex = getParentDirIndex(parentPathParts, filePathParts);

  return filePathParts.slice(parentDirIndex + 1).join('/');
};
