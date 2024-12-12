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
import { produceVarName } from './strings';
import { removeExtension, sliceFromParentDir, transformToPathString } from './paths';

export const processIndexFile = async (dirPath) => {
  return asyncCompose(assignIndexFilePath, assignIndexFileData)(dirPath);
};

export const processChildFile = async (dirEnt) => {
  return asyncCompose(assignFilePath)(dirEnt);
};

export const processTargetFiles = async (dirPath) => {
  return asyncCompose(assignDirItems, filterItemsToInclude, filterFiles, assignChildFiles)(dirPath);
};

export const processRelativePath = (pathsContext) => {
  return compose(removeExtension, sliceFromParentDir, transformToPathString)(pathsContext);
};

export const processIndexFileData = async (dirPath) => {
  return asyncCompose(
    processTargetFiles,
    assignVarNames,
    assignRelativePaths,
    reduceToFileData
  )(dirPath);
};

export const reduceToFileData = (files) => {
  console.log(files);
};
