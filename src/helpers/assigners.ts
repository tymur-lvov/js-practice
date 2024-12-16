import { processIndexFileData } from '../processors/processIndexFiles';
import { getDirEnts } from './files';
import { filterFiles } from './filters';
import { findIndexFileName } from './finders';
import { getIndexFilePath, getPath } from './paths';

export const assignIndexFilePath = ({ parentPath }) => {
  const filePath = getIndexFilePath(parentPath);

  return { parentPath, filePath };
};

export const assignIndexFileData = async ({ parentPath, ...context }) => {
  const fileData = await processIndexFileData(parentPath);

  return { ...context, fileData };
};

export const assignDirEnts = async ({ parentPath }) => {
  const dirEnts = await getDirEnts(parentPath);

  return { parentPath, dirEnts };
};

export const assignFiles = ({ dirEnts, ...context }) => {
  const files = filterFiles(dirEnts);

  return { ...context, files };
};
