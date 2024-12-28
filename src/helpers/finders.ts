import { getExportStatementConditions, getIndexFileNameConditions } from './conditions';

export const findIndexFileName = (parentPath) => {
  const conditions = getIndexFileNameConditions(parentPath);

  return conditions.find(({ checkCondition }) => checkCondition()).getResult();
};

export const findExportStatement = (varName, realtivePath) => {
  const conditions = getExportStatementConditions(varName, realtivePath);

  return conditions.find(({ checkCondition }) => checkCondition()).getResult();
};
