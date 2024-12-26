import { readdir } from 'fs/promises';
import { concatExportStatement, getExportStatement, getVarName } from './strings';
import { getFilePaths, getRelativePath } from './paths';

export const getDirEntsRecurs = async (parentPath) => {
  return readdir(parentPath, { withFileTypes: true, recursive: true });
};

export const createIndexFileData = (parentPath, modulePaths) => {
  return modulePaths.reduce((fileData, modulePath) => {
    const varName = getVarName(modulePath);

    const realtivePath = getRelativePath(parentPath, modulePath);

    const exportStatement = getExportStatement(varName, realtivePath);

    return concatExportStatement(fileData, exportStatement);
  }, '');
};

export const getIndexFileData = async (parentPath) => {
  const filePaths = await getFilePaths(parentPath);

  return createIndexFileData(parentPath, filePaths);
};

export const writeIndexFiles = (indexFiles) => {};
