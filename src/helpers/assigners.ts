import { resolve } from 'path';
import { readdir } from 'fs/promises';
import { indexFilePathConditions } from './conditions';
import { processChildFile, processIndexFileData, processRelativePath } from './processors';
import { produceVarName } from './strings';
import { compose } from './composers';
import { removeExtension, sliceFromParentDir, transformToPathString } from './paths';

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

export const assignVarNames = ({ childFiles, ...context }) => {
  return {
    ...context,
    childFiles: childFiles.map(({ filePath }) => {
      const varName = produceVarName(filePath);

      return { filePath, varName };
    }),
  };
};

export const assignRelativePaths = ({ parentPath, childFiles }) => {
  return {
    parentPath,
    childFiles: childFiles.map(({ filePath, ...context }) => {
      const relativePath = processRelativePath({ parentPath, filePath });

      return { ...context, filePath, relativePath };
    }),
  };
};
