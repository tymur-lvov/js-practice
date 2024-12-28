import { getIndexFileName, getTypesIndexFileName } from './misc';
import { isDefaultModule, isNamedModule, isTypeModule, isTypesPath } from './predicates';
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

export const getExportStatementConditions = (varName, realtivePath) => {
  return [
    {
      checkCondition: () => isNamedModule(realtivePath),
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
