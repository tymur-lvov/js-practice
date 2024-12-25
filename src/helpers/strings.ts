import { basename, extname } from 'path';
import { getDirEnts } from './files';
import { compose } from './composers';
import { filterFiles, filterFilesToInclude } from './filters';
import { getFilePaths } from './paths';

export const getBasenameWithoutExtension = (filePath) => {
  return basename(filePath, extname(filePath));
};

export const sterilizeBasename = (basename) => {
  return basename.replace(/[^a-zA-Z0-9$_]/g, '');
};

export const getVarName = (filePath) => {
  const filePathBasename = getBasenameWithoutExtension(filePath);

  return sterilizeBasename(filePathBasename);
};

export const removeExtension = (filePath) => {
  return filePath.slice(0, filePath.lastIndexOf('.'));
};

export const sliceFilePathFromParentDir = (parentPath, filePath) => {
  const parentPathParts = parentPath.split('/');
  const filePathParts = filePath.split('/');

  const parentDir = parentPathParts[parentPathParts.length - 1];
  const parentDirIndex = filePathParts.indexOf(parentDir);

  return filePathParts.slice(parentDirIndex).join('/');
};

export const transformToRelativePath = (filePath) => {
  return `./${filePath}`;
};

export const getRelativePath = (parentPath, rawFilePath) => {
  const filePath = removeExtension(rawFilePath);

  const slicedFilePath = sliceFilePathFromParentDir(parentPath, filePath);

  return transformToRelativePath(slicedFilePath);
};

export const createIndexFileData = (parentPath, modulePaths) => {
  return modulePaths.reduce((fileData, modulePath) => {
    const varName = getVarName(modulePath);

    const realtivePath = getRelativePath(parentPath, modulePath);

    console.log(varName);
    console.log(realtivePath);
  }, '');
};

export const getIndexFileData = async (parentPath) => {
  const modulePaths = await getModulePaths(parentPath);

  return createIndexFileData(parentPath, modulePaths);
};

export const getModulePaths = async (parentPath) => {
  const dirEnts = await getDirEnts(parentPath);

  const files = compose(filterFiles, filterFilesToInclude)(dirEnts);

  return getFilePaths(files);
};
