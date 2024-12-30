import type {
  IConcatExportStatement,
  IDeleteExtension,
  IGetDefaultExportStatement,
  IGetExportStatement,
  IGetNamedExportStatement,
  IGetNamedTypeExportStatement,
  IGetParentDirIndex,
  IGetVarName,
  ISplitToParts,
} from '../../@types/helpers.types';
import { compose } from './composers';
import { findExportStatement } from './finders';
import { getBasename, getRelativePath, sterilizeBasename } from './paths';

export const getNamedExportStatement: IGetNamedExportStatement = (realtivePath) => {
  return `export * from '${deleteExtension(realtivePath)}';\n`;
};

export const getNamedTypeExportStatement: IGetNamedTypeExportStatement = (realtivePath) => {
  return `export type * from '${deleteExtension(realtivePath)}';\n`;
};

export const getDefaultExportStatement: IGetDefaultExportStatement = (varName, realtivePath) => {
  return `export { default as ${varName} } from '${deleteExtension(realtivePath)}';\n`;
};

export const concatExportStatement: IConcatExportStatement = (fileData, exportStatement) => {
  return fileData.concat(exportStatement);
};

export const deleteExtension: IDeleteExtension = (filePath) => {
  return filePath.slice(0, filePath.lastIndexOf('.'));
};

export const splitToParts: ISplitToParts = (div, ...strings) => {
  return strings.map((string) => string.split(div));
};

export const getVarName: IGetVarName = (filePath) => {
  const basename = compose(getBasename, deleteExtension)(filePath);

  return sterilizeBasename(basename);
};

export const getParentDirIndex: IGetParentDirIndex = (parentPathParts, filePathParts) => {
  const lastPathPart = parentPathParts[parentPathParts.length - 1];

  return filePathParts.indexOf(lastPathPart);
};

export const getExportStatement: IGetExportStatement = (parentPath, modulePath) => {
  const varName = getVarName(modulePath);
  const relativePath = getRelativePath(parentPath, modulePath);

  return findExportStatement(varName, relativePath);
};
