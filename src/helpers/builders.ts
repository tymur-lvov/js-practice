import { getDirEntData, getIndexFileData } from '../helpers/files';
import { getIndexFilePath } from '../helpers/paths';

import type { IAssignDirEntData, ICreateIndexFiles } from '../../@types/helpers.types';

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
