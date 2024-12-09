import { assignIndexFilePath, assignIndexFileData } from './assigners';
import { asyncCompose } from './composers';

export const createIndexFile = async (targetDirPath) => {
  return asyncCompose(assignIndexFilePath, assignIndexFileData)(targetDirPath);
};
