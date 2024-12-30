import { readdir, readFile, writeFile } from 'fs/promises';
import { concatExportStatement, getExportStatement } from './strings';
import { getFilePaths, getPath } from './paths';
import type {
  CreateIndexFileDataType,
  GetDirEntDataType,
  GetDirEntsRecursType,
  GetIndexFileDataType,
  ReadFileDataType,
  WriteFileDataType,
  WriteIndexFilesType,
} from '../../@types/helpers.types';
import { findDirEntData } from './finders';

export const readFileData: ReadFileDataType = async (filePath) => {
  return readFile(filePath, 'utf-8');
};

export const writeFileData: WriteFileDataType = async (filePath, fileData) => {
  writeFile(filePath, fileData);
};

export const getDirEntsRecurs: GetDirEntsRecursType = async (parentPath) => {
  return readdir(parentPath, { withFileTypes: true, recursive: true });
};

export const writeIndexFiles: WriteIndexFilesType = (indexFiles) => {
  console.log(indexFiles);
  // indexFiles.forEach(({ indexFilePath, indexFileData }) =>
  //   writeFileData(indexFilePath, indexFileData)
  // );
};

export const createIndexFileData: CreateIndexFileDataType = (parentPath, modulePaths) => {
  return modulePaths.reduce((accFileData, modulePath) => {
    const exportStatement = getExportStatement(parentPath, modulePath);

    return concatExportStatement(accFileData, exportStatement);
  }, '');
};

export const getIndexFileData: GetIndexFileDataType = async (parentPath) => {
  const filePaths = await getFilePaths(parentPath);

  return createIndexFileData(parentPath, filePaths);
};

export const getDirEntData: GetDirEntDataType = (dirEnt) => {
  const dirEntPath = getPath(dirEnt.parentPath, dirEnt.name);

  return findDirEntData(dirEnt, dirEntPath);
};
