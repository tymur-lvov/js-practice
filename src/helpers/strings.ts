import { findExportStatement } from './finders';
import { getBasename, sterilizeBasename } from './paths';

export const removeExtension = (filePath) => {
  return filePath.slice(0, filePath.lastIndexOf('.'));
};

export const getVarName = (filePath) => {
  const filePathBasename = getBasename(filePath);

  const basenameWithoutExtension = removeExtension(filePathBasename);

  return sterilizeBasename(basenameWithoutExtension);
};

export const splitStringsToParts = (div, ...strings) => {
  return strings.map((string) => string.split(div));
};

export const getParentDirIndex = (parentPathParts, filePathParts) => {
  const parentDir = parentPathParts[parentPathParts.length - 1];

  return filePathParts.indexOf(parentDir);
};

export const getNamedExportStatement = (realtivePath) => {
  return `export * from ${removeExtension(realtivePath)};\n`;
};

export const getNamedTypeExportStatement = (realtivePath) => {
  return `export type * from ${removeExtension(realtivePath)};\n`;
};

export const getDefaultExportStatement = (varName, realtivePath) => {
  return `export { default as ${varName} } from ${removeExtension(realtivePath)};\n`;
};

export const getExportStatement = (varName, realtivePath) => {
  return findExportStatement(varName, realtivePath);
};

export const concatExportStatement = (fileData, exportStatement) => {
  return fileData.concat(exportStatement);
};
