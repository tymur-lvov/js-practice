import { getIndexFileData } from './helpers/files';
import { getIndexFilePath } from './helpers/paths';

export const processIndexFiles = async (parentPaths) => {
  return Promise.all(
    parentPaths.map(async (parentPath) => {
      const indexFilePath = getIndexFilePath(parentPath);

      const indexFileData = await getIndexFileData(parentPath);

      return { indexFilePath, indexFileData };
    })
  );
};
