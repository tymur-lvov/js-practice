import type {
  GetDirEntDataConditionsType,
  GetExportStatementConditionsType,
  GetIndexFileNameConditionsType,
} from '../../@types/helpers.types';
import { readFileData } from './files';
import { getIndexFileName, getTypesIndexFileName } from './misc';
import {
  isDefaultModule,
  isEntityAFile,
  isNamedModule,
  isTypeModule,
  isTypesPath,
} from './predicates';
import {
  getDefaultExportStatement,
  getNamedExportStatement,
  getNamedTypeExportStatement,
} from './strings';

export const getDirEntDataConditions: GetDirEntDataConditionsType = (dirEnt, dirEntPath) => {
  return [
    {
      checkCondition: () => isEntityAFile(dirEnt),
      getResult: async () => await readFileData(dirEntPath),
    },
    {
      checkCondition: () => !isEntityAFile(dirEnt),
      getResult: () => null,
    },
  ];
};

export const getIndexFileNameConditions: GetIndexFileNameConditionsType = (parentPath) => {
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

export const getExportStatementConditions: GetExportStatementConditionsType = (
  varName,
  realtivePath
) => {
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
