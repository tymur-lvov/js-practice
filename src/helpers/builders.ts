import { getDirEntData, getIndexFileData, getIndexFilePath } from '@helpers';

import type { IAssignDirEntData, ICreateIndexFiles } from '@types';

export const createIndexFiles: ICreateIndexFiles = async (parentPaths) => {
  return Promise.all(
    parentPaths.map(async (parentPath) => ({
      indexFilePath: getIndexFilePath(parentPath),
      indexFileData: await getIndexFileData(parentPath),
    }))
  );
};

export const assignDirEntData: IAssignDirEntData = (dirEnts) => {
  return Promise.all(
    dirEnts.map(async (dirEnt) => ({
      dirEntInfo: dirEnt,
      dirEntData: await getDirEntData(dirEnt),
    }))
  );
};
