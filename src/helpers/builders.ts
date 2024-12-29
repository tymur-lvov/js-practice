import { getDirEntData, getIndexFileData } from '../helpers/files';
import { getIndexFilePath } from '../helpers/paths';

import type { AssignDirEntDataType, CreateIndexFilesType } from '../../@types/helpers.types';

export const createIndexFiles: CreateIndexFilesType = async (parentPaths) => {
  return Promise.all(
    parentPaths.map(async (parentPath) => ({
      indexFilePath: getIndexFilePath(parentPath),
      indexFileData: await getIndexFileData(parentPath),
    }))
  );
};

export const assignDirEntData: AssignDirEntDataType = (dirEnts) => {
  return Promise.all(
    dirEnts.map(async (dirEnt) => ({
      dirEntInfo: dirEnt,
      dirEntData: await getDirEntData(dirEnt),
    }))
  );
};
