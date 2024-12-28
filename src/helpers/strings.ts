import { compose } from './composers';
import { findExportStatement } from './finders';
import { getBasename, getRelativePath, sterilizeBasename } from './paths';

export const getNamedExportStatement = (realtivePath) => {
  return `export * from '${deleteExtension(realtivePath)}';\n`;
};

export const getNamedTypeExportStatement = (realtivePath) => {
  return `export type * from '${deleteExtension(realtivePath)}';\n`;
};

export const getDefaultExportStatement = (varName, realtivePath) => {
  return `export { default as ${varName} } from '${deleteExtension(realtivePath)}';\n`;
};

export const concatExportStatement = (fileData, exportStatement) => {
  return fileData.concat(exportStatement);
};

export const deleteExtension = (filePath) => {
  return filePath.slice(0, filePath.lastIndexOf('.'));
};

export const splitToParts = (div, ...strings) => {
  return strings.map((string) => string.split(div));
};

export const getVarName = (filePath) => {
  const basename = compose(getBasename, deleteExtension)(filePath);

  return sterilizeBasename(basename);
};

export const getParentDirIndex = (parentPathParts, filePathParts) => {
  const lastPathPart = parentPathParts[parentPathParts.length - 1];

  return filePathParts.indexOf(lastPathPart);
};

export const getExportStatement = (parentPath, modulePath) => {
  const varName = getVarName(modulePath);
  const relativePath = getRelativePath(parentPath, modulePath);

  return findExportStatement(varName, relativePath);
};
