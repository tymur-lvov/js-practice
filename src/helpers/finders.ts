import { getExportStatementCondition, getIndexFileNameConditions } from './conditions';

export const findIndexFileName = (parentPath) => {
  const conditions = getIndexFileNameConditions(parentPath);

  return conditions.find(({ condition }) => condition()).result();
};

export const findExportStatement = (varName, realtivePath) => {
  const exportStatementCondition = getExportStatementCondition(varName, realtivePath);

  return exportStatementCondition.find(({ condition }) => condition()).result();
};
