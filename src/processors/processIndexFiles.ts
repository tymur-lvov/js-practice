import { asyncCompose } from '../helpers/composers';
import { getIndexFileData, getIndexFilePath } from '../helpers/files';

export const processIndexFiles = async (parentPaths) => {
  const indexFileProcessor = asyncCompose(getIndexFilePath, getIndexFileData);

  return Promise.all(parentPaths.map(indexFileProcessor));
};

export const processIndexFileData = async (filePath) => {
  console.log(filePath);
};
