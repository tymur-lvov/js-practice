import { processIndexFileData } from '../processors/processIndexFiles';
import { findIndexFileName } from './finders';
import { getPath } from './paths';

export const getIndexFilePath = (context) => {
  const parentPath = context;

  const indexFileName = findIndexFileName(parentPath);

  const filePath = getPath(parentPath, indexFileName);

  return { filePath };
};

export const getIndexFileData = async (context) => {
  const { filePath } = context;

  const fileData = await processIndexFileData(filePath);

  return { ...context, fileData };
};
