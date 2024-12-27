import { compose } from './composers';
import { findExportStatement } from './finders';
import { getBasename, sterilizeBasename } from './paths';

export const deleteExtension = (filePath) => {
  return filePath.slice(0, filePath.lastIndexOf('.'));
};

export const getVarName = (filePath) => {
  return sterilizeBasename(compose(getBasename, deleteExtension)(filePath));
};

export const splitToParts = (div, ...strings) => {
  return strings.map((string) => string.split(div));
};

export const getParentDirIndex = (parentPathParts, filePathParts) => {
  return filePathParts.indexOf(parentPathParts[parentPathParts.length - 1]);
};

export const getNamedExportStatement = (realtivePath) => {
  return `export * from ${deleteExtension(realtivePath)};\n`;
};

export const getNamedTypeExportStatement = (realtivePath) => {
  return `export type * from ${deleteExtension(realtivePath)};\n`;
};

export const getDefaultExportStatement = (varName, realtivePath) => {
  return `export { default as ${varName} } from ${deleteExtension(realtivePath)};\n`;
};

export const getExportStatement = (varName, realtivePath) => {
  return findExportStatement(varName, realtivePath);
};

export const concatExportStatement = (fileData, exportStatement) => {
  return fileData.concat(exportStatement);
};
