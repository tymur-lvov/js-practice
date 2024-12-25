import { basename } from 'path';
import { getDirEnts } from './files';
import { compose } from './composers';
import { filterFiles, filterFilesToInclude } from './filters';
import { getFilePaths } from './paths';

export const getBasename = (filePath) => {
  return basename(filePath);
};

export const sterilizeBasename = (basename) => {
  return basename.replace(/[^a-zA-Z0-9$_]/g, '');
};

export const getVarName = (filePath) => {
  const filePathBasename = getBasename(filePath);

  const basenameWithoutExt = removeExtension(filePathBasename);

  return sterilizeBasename(basenameWithoutExt);
};

export const removeExtension = (filePath) => {
  return filePath.slice(0, filePath.lastIndexOf('.'));
};

export const sliceFilePathFromParentDir = (parentPath, filePath) => {
  const parentPathParts = parentPath.split('/');
  const filePathParts = filePath.split('/');

  const parentDir = parentPathParts[parentPathParts.length - 1];
  const parentDirIndex = filePathParts.indexOf(parentDir);

  return filePathParts.slice(parentDirIndex + 1).join('/');
};

export const transformToRelativePath = (filePath) => {
  return `./${filePath}`;
};

export const getRelativePath = (parentPath, filePath) => {
  const slicedFilePath = sliceFilePathFromParentDir(parentPath, filePath);

  return transformToRelativePath(slicedFilePath);
};

export const getExportStatement = (varName, realtivePath) => {
  if (/\.(ts|tsx)$/.test(realtivePath)) {
    return `export * from ${realtivePath};\n`;
  }

  return `export { default as ${varName} } from ${realtivePath};\n`;
};

export const createIndexFileData = (parentPath, modulePaths) => {
  return modulePaths.reduce((fileData, modulePath) => {
    const varName = getVarName(modulePath);

    const realtivePath = getRelativePath(parentPath, modulePath);

    const exportStatement = getExportStatement(varName, realtivePath);

    console.log(exportStatement);
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
