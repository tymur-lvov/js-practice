import { assignIndexFilePath, assignIndexFileData } from './assigners';
import { asyncCompose } from './composers';

export const createIndexFile = async (dirPath) => {
  return asyncCompose(assignIndexFilePath, assignIndexFileData)(dirPath);
};
