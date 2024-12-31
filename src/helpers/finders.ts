import {
  createError,
  getDirEntDataConditions,
  getErrorMessageConditions,
  getIndexFileNameConditions,
  getExportStatementConditions,
} from '@helpers';

import type {
  IFindDirEntData,
  IFindErrorMessage,
  IFindIndexFileName,
  IFindExportStatement,
} from '@types';

export const findErrorMessage: IFindErrorMessage = (reason: string) => {
  const conditions = getErrorMessageConditions(reason);
  const result = conditions.find(({ checkCondition }) => checkCondition())?.getResult();

  if (!result) {
    throw new Error('Error message condition result not found');
  }

  return result;
};

export const findIndexFileName: IFindIndexFileName = (parentPath) => {
  const conditions = getIndexFileNameConditions(parentPath);
  const result = conditions.find(({ checkCondition }) => checkCondition())?.getResult();

  if (!result) {
    throw createError('!findIndexFileName');
  }

  return result;
};

export const findExportStatement: IFindExportStatement = (varName, realtivePath) => {
  const conditions = getExportStatementConditions(varName, realtivePath);
  const result = conditions.find(({ checkCondition }) => checkCondition())?.getResult();

  if (!result) {
    throw createError('!findExportStatement');
  }

  return result;
};

export const findDirEntData: IFindDirEntData = async (dirEnt, dirEntPath) => {
  const conditions = getDirEntDataConditions(dirEnt, dirEntPath);
  const result = await conditions.find(({ checkCondition }) => checkCondition())?.getResult();

  if (result === undefined) {
    throw createError('!findDirEntData');
  }

  return result;
};
