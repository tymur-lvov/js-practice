import { getExportStatementCondition, getIndexFileNameConditions } from './conditions';

export const findIndexFileName = (parentPath) => {
  return getIndexFileNameConditions(parentPath)
    .find(({ checkCondition }) => checkCondition())
    .getResult();
};

export const findExportStatement = (varName, realtivePath) => {
  return getExportStatementCondition(varName, realtivePath)
    .find(({ checkCondition }) => checkCondition())
    .getResult();
};
