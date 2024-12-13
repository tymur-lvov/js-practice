import { resolve } from 'path';
import { readdir } from 'fs/promises';
import { findIndexFilePathCondition } from './conditions';
import { processChildFile, processIndexFileData, processRelativePath } from './processors';
import { produceVarName } from './strings';
import { compose } from './composers';
import { removeExtension, sliceFromParentDir, transformToPathString } from './paths';

export const assignIndexFilePath = (dirPath) => {
  const filePath = findIndexFilePathCondition(dirPath);

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

export const assignChildFiles = async ({ parentPath, dirEnts }) => {
  const childFiles = await Promise.all(
    dirEnts.map((dirEnt) => processChildFile({ parentPath, dirEnt }))
  );

  return { parentPath, childFiles };
};

export const assignFilePath = ({ dirEnt: { parentPath, name }, ...context }) => {
  const filePath = resolve(parentPath, name);

  return { ...context, filePath };
};

export const assignVarNames = ({ filePath, ...context }) => {
  const varName = produceVarName(filePath);

  return { ...context, filePath, varName };
};

export const assignRelativePaths = ({ parentPath, filePath, ...context }) => {
  const relativePath = processRelativePath({ parentPath, filePath });

  return { ...context, relativePath };
};
