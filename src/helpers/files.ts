import { readdir, readFile, writeFile } from 'fs/promises';

import {
  getPath,
  getFilePaths,
  findDirEntData,
  getExportStatement,
  concatExportStatement,
} from '@helpers';

import type {
  IReadFileData,
  IGetDirEntData,
  IWriteFileData,
  IWriteIndexFiles,
  IGetDirEntsRecurs,
  IGetIndexFileData,
  ICreateIndexFileData,
} from '@types';

export const readFileData: IReadFileData = async (filePath) => {
  return readFile(filePath, 'utf-8');
};

export const writeFileData: IWriteFileData = async (filePath, fileData) => {
  writeFile(filePath, fileData);
};

export const getDirEntsRecurs: IGetDirEntsRecurs = async (parentPath) => {
  return readdir(parentPath, { withFileTypes: true, recursive: true });
};

export const writeIndexFiles: IWriteIndexFiles = (indexFiles) => {
  indexFiles.forEach(({ indexFilePath, indexFileData }) =>
    writeFileData(indexFilePath, indexFileData)
  );
};

export const createIndexFileData: ICreateIndexFileData = (parentPath, modulePaths) => {
  return modulePaths.reduce((accFileData, modulePath) => {
    const exportStatement = getExportStatement(parentPath, modulePath);

    return concatExportStatement(accFileData, exportStatement);
  }, '');
};

export const getIndexFileData: IGetIndexFileData = async (parentPath) => {
  const filePaths = await getFilePaths(parentPath);

  return createIndexFileData(parentPath, filePaths);
};

export const getDirEntData: IGetDirEntData = async (dirEnt) => {
  const dirEntPath = getPath(dirEnt.parentPath, dirEnt.name);

  return findDirEntData(dirEnt, dirEntPath);
};
