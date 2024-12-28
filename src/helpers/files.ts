import { readdir, readFile, writeFile } from 'fs/promises';
import { concatExportStatement, getExportStatement, getVarName } from './strings';
import { getFilePaths, getPath, getRelativePath } from './paths';
import { isEntityAFile } from './predicates';

export const readFileData = async (filePath) => {
  return readFile(filePath, 'utf-8');
};

export const writeFileData = async (filePath, fileData) => {
  return writeFile(filePath, fileData);
};

export const getDirEntsRecurs = async (parentPath) => {
  return readdir(parentPath, { withFileTypes: true, recursive: true });
};

export const writeIndexFiles = (indexFiles) => {
  indexFiles.forEach(({ indexFilePath, indexFileData }) =>
    writeFileData(indexFilePath, indexFileData)
  );
};

export const getDirEntData = (dirEnt) => {
  const dirEntPath = getPath(dirEnt.parentPath, dirEnt.name);

  return isEntityAFile(dirEnt) ? readFileData(dirEntPath) : null;
};

export const getIndexFileData = async (parentPath) => {
  const filePaths = await getFilePaths(parentPath);

  return createIndexFileData(parentPath, filePaths);
};

export const createIndexFileData = (parentPath, modulePaths) => {
  return modulePaths.reduce((accFileData, modulePath) => {
    const exportStatement = getExportStatement(parentPath, modulePath);

    return concatExportStatement(accFileData, exportStatement);
  }, '');
};
