import {
  assignChildFiles,
  assignDirItems,
  assignFilePath,
  assignIndexFileData,
  assignIndexFilePath,
  assignRelativePaths,
  assignVarNames,
} from './assigners';
import { asyncCompose, compose } from './composers';
import { filterFiles, filterItemsToInclude } from './filters';
import { basename, extname } from 'path';
import { produceStatement, produceVarName } from './strings';
import { removeExtension, sliceFromParentDir, transformToPathString } from './paths';
import { typeDirName } from './constants';
import { findStatementCondition } from './conditions';

export const processIndexFile = async (dirPath) => {
  return asyncCompose(assignIndexFilePath, assignIndexFileData)(dirPath);
};

export const processChildFile = async ({ parentPath, dirEnt }) => {
  return asyncCompose(assignFilePath, assignVarNames, assignRelativePaths)({ parentPath, dirEnt });
};

export const processTargetFiles = async (dirPath) => {
  return asyncCompose(assignDirItems, filterItemsToInclude, filterFiles, assignChildFiles)(dirPath);
};

export const processRelativePath = (pathsContext) => {
  return compose(removeExtension, sliceFromParentDir, transformToPathString)(pathsContext);
};

export const processIndexFileData = async (dirPath) => {
  return asyncCompose(processTargetFiles, reduceToFileData)(dirPath);
};

export const processExportStatement = (childFile) => {
  return compose(findStatementCondition, produceStatement)(childFile);
};

export const reduceToFileData = ({ childFiles }) => {
  return childFiles.reduce(
    (fileData, childFile) => fileData.concat(processExportStatement(childFile)),
    ''
  );
};
