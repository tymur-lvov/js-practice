import { getIndexFileData } from '../helpers/files';
import { getIndexFilePath } from '../helpers/paths';

export const buildIndexFiles = async (parentPaths) => {
  return Promise.all(
    parentPaths.map(async (parentPath) => ({
      indexFilePath: getIndexFilePath(parentPath),
      indexFileData: await getIndexFileData(parentPath),
    }))
  );
};
