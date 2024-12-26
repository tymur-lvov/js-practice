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
      checkCondition: () => !isTypesPath(parentPath),
      getResult: () => getIndexFileName(),
    },

    {
      checkCondition: () => isTypesPath(parentPath),
      getResult: () => getTypesIndexFileName(),
    },
  ];
};

export const getExportStatementCondition = (varName, realtivePath) => {
  return [
    {
      checkCondition: () => isModule(realtivePath),
      getResult: () => getNamedExportStatement(realtivePath),
    },

    {
      checkCondition: () => isTypeModule(realtivePath),
      getResult: () => getNamedTypeExportStatement(realtivePath),
    },

    {
      checkCondition: () => isDefaultModule(realtivePath),
      getResult: () => getDefaultExportStatement(varName, realtivePath),
    },
  ];
};
