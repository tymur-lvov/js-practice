import { resolve } from 'path';
import { readdir } from 'fs/promises';
import { indexFilePathConditions } from './conditions';
import { processChildFile, processIndexFileData } from './processors';

export const assignIndexFilePath = (dirPath) => {
  const filePath = indexFilePathConditions.find(({ condition }) => condition(dirPath));

  return { dirPath, filePath };
};

export const assignIndexFileData = async ({ dirPath, ...context }) => {
  const fileData = await processIndexFileData(dirPath);

  return { ...context, fileData };
};

export const assignDirItems = async (dirPath) => {
  const dirEnts = await readdir(dirPath, { withFileTypes: true, recursive: true });

  return { parentPath: dirPath, dirEnts };
};

export const assignChildFiles = async ({ dirEnts, ...context }) => {
  const childFiles = await Promise.all(dirEnts.map(processChildFile));

  return { ...context, childFiles };
};

export const assignFilePath = ({ parentPath, name }) => {
  const filePath = resolve(parentPath, name);

  return { filePath };
};
