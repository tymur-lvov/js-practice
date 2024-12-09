import { resolve } from 'path';
import { processIndexFileData } from './processors';

export const assignIndexFilePath = (dirPath) => {
  return dirPath.includes('@types')
    ? { dirPath, filePath: resolve(dirPath, 'index.types.ts') }
    : { dirPath, filePath: resolve(dirPath, 'index.ts') };
};

export const assignIndexFileData = async ({ dirPath, ...context }) => {
  return { ...context, fileData: await processIndexFileData(dirPath) };
};
