import { getIndexFileData, getIndexFilePath } from '@helpers';

import type { ICreateIndexFiles } from '@types';

export const createIndexFiles: ICreateIndexFiles = async (parentPaths) => {
  return Promise.all(
    parentPaths.map(async (parentPath) => ({
      indexFilePath: getIndexFilePath(parentPath),
      indexFileData: await getIndexFileData(parentPath),
    }))
  );
};
