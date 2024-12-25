import { getIndexFileName, getTypesIndexFileName } from './misc';
import { isDefaultModule, isModule, isTypeModule, isTypesPath } from './predicates';
import {
  getDefaultExportStatement,
  getNamedExportStatement,
  getNamedTypeExportStatement,
} from './strings';

export const getIndexFileNameConditions = (parentPath) => {
  return [
    {
      condition: () => !isTypesPath(parentPath),
      result: () => getIndexFileName(),
    },

    {
      condition: () => isTypesPath(parentPath),
      result: () => getTypesIndexFileName(),
    },
  ];
};

export const getExportStatementCondition = (varName, realtivePath) => {
  return [
    {
      condition: () => isModule(realtivePath),
      result: () => getNamedExportStatement(realtivePath),
    },

    {
      condition: () => isTypeModule(realtivePath),
      result: () => getNamedTypeExportStatement(realtivePath),
    },

    {
      condition: () => isDefaultModule(realtivePath),
      result: () => getDefaultExportStatement(varName, realtivePath),
    },
  ];
};
