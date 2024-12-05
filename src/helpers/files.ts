import * as fs from 'fs/promises';

import { createTargetFiles, filterFiles } from '@helpers';

import type {
  AssignFilesDataType,
  GetDirItemsType,
  GetFileDataType,
  GetFilesType,
  ProduceIndexFileDataType,
} from '@types';

export const produceIndexFileData: ProduceIndexFileDataType = async (dirPath) => {
  const targetFiles = await createTargetFiles(dirPath);

  return '';
};

export const getFiles: GetFilesType = async (dirPath) => {
  const dirItems = await getDirItems(dirPath);

  return filterFiles(dirItems);
};

export const getDirItems: GetDirItemsType = async (dirPath) => {
  return fs.readdir(dirPath, { withFileTypes: true, recursive: true });
};

export const getFileData: GetFileDataType = async (filePath) => {
  return fs.readFile(filePath, 'utf-8');
};

export const assignFilesData: AssignFilesDataType = async (files) => {
  return Promise.all(
    files.map(async ({ filePath }) => ({
      filePath,
      fileData: await getFileData(filePath),
    }))
  );
};
