import { getExportStatementCondition, getIndexFileNameConditions } from './conditions';

export const findIndexFileName = (parentPath) => {
  const conditions = getIndexFileNameConditions(parentPath);

  return conditions.find(({ checkCondition }) => checkCondition()).getResult();
};

export const findExportStatement = (varName, realtivePath) => {
  const exportStatementCondition = getExportStatementCondition(varName, realtivePath);

  return exportStatementCondition.find(({ checkCondition }) => checkCondition()).getResult();
};
