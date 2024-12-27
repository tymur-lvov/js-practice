import { readdir } from 'fs/promises';
import { concatExportStatement, getExportStatement, getVarName } from './strings';
import { getFilePaths, getRelativePath } from './paths';

export const getDirEntsRecurs = async (parentPath) => {
  return readdir(parentPath, { withFileTypes: true, recursive: true });
};

export const createIndexFileData = (parentPath, modulePaths) => {
  return modulePaths.reduce(
    (accFileData, modulePath) =>
      concatExportStatement(
        accFileData,
        getExportStatement(getVarName(modulePath), getRelativePath(parentPath, modulePath))
      ),
    ''
  );
};

export const getIndexFileData = async (parentPath) => {
  return createIndexFileData(parentPath, await getFilePaths(parentPath));
};

export const writeIndexFiles = (indexFiles) => {
  console.log(indexFiles);
};
