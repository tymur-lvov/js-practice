import { readdir } from 'fs/promises';
import { asyncCompose } from './composers';
import { resolve } from 'path';
import { itemsToExclude } from './constants';
import { readFile } from 'fs/promises';

export const processIndexFileData = async (dirPath) => {
  const files = await asyncCompose(
    assignDirItems,
    filterItemsToInclude,
    filterFiles,
    assignChildFiles
  )(dirPath);
  console.log(files);
};

export const assignDirItems = async (dirPath) => {
  return {
    parentDirPath: dirPath,
    dirEnts: await readdir(dirPath, { withFileTypes: true, recursive: true }),
  };
};

const setOfItemsToExclude = new Set(itemsToExclude);

export const filterItemsToInclude = ({ dirEnts, ...context }) => {
  return {
    ...context,
    dirEnts: dirEnts.filter(({ name }) => !setOfItemsToExclude.has(name)),
  };
};

export const filterFiles = ({ dirEnts, ...context }) => {
  return {
    ...context,
    dirEnts: dirEnts.filter((dirEnt) => dirEnt.isFile()),
  };
};

export const assignChildFiles = async ({ dirEnts, ...context }) => {
  return {
    ...context,
    childFiles: await createChildFiles(dirEnts),
  };
};

export const createChildFiles = async (dirEnts) => {
  return asyncCompose(assignFilePaths, assignFilesData)(dirEnts);
};

export const assignFilePaths = (dirEnts) => {
  return dirEnts.map(({ parentPath, name }) => ({ filePath: resolve(parentPath, name) }));
};

export const assignFilesData = (files) => {
  return Promise.all(
    files.map(async ({ filePath }) => ({ filePath, fileData: await readFile(filePath, 'utf-8') }))
  );
};
