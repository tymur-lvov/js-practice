import { readdir } from 'fs/promises';
import { concatExportStatement, getExportStatement, getVarName } from './strings';
import { getFilePaths, getRelativePath } from './paths';
import { indexFileName, typesIndexFileName } from '../constants';

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
  const modulePaths = await getFilePaths(parentPath);

  console.log(createIndexFileData(parentPath, modulePaths));
};

export const getIndexFileName = () => {
  return indexFileName;
};

export const getTypesIndexFileName = () => {
  return typesIndexFileName;
};
