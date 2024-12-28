import { getDirEntData, getIndexFileData } from '../helpers/files';
import { getIndexFilePath } from '../helpers/paths';

export const createIndexFiles = async (parentPaths) => {
  return Promise.all(
    parentPaths.map(async (parentPath) => ({
      indexFilePath: getIndexFilePath(parentPath),
      indexFileData: await getIndexFileData(parentPath),
    }))
  );
};

export const assignDirEntData = (dirEnts) => {
  return Promise.all(
    dirEnts.map(async (dirEnt) => ({
      dirEntInfo: dirEnt,
      dirEntData: await getDirEntData(dirEnt),
    }))
  );
};
