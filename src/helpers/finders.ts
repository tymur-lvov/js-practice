import type {
  IFindDirEntData,
  IFindExportStatement,
  IFindIndexFileName,
} from '../../@types/helpers.types';
import {
  getDirEntDataConditions,
  getExportStatementConditions,
  getIndexFileNameConditions,
} from './conditions';

export const findIndexFileName: IFindIndexFileName = (parentPath) => {
  const conditions = getIndexFileNameConditions(parentPath);
  const result = conditions.find(({ checkCondition }) => checkCondition())?.getResult();

  if (!result) {
    throw new Error('Index file name condition result not found');
  }

  return result;
};

export const findExportStatement: IFindExportStatement = (varName, realtivePath) => {
  const conditions = getExportStatementConditions(varName, realtivePath);
  const result = conditions.find(({ checkCondition }) => checkCondition())?.getResult();

  if (!result) {
    throw new Error('Export condition result not found');
  }

  return result;
};

export const findDirEntData: IFindDirEntData = (dirEnt, dirEntPath) => {
  const conditions = getDirEntDataConditions(dirEnt, dirEntPath);
  const result = conditions.find(({ checkCondition }) => checkCondition())?.getResult();

  if (result === undefined) {
    throw new Error('DirEnt data condition result not found');
  }

  return result;
};
