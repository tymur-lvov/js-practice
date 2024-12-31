import {
  isTypesPath,
  isTypeModule,
  readFileData,
  isNamedModule,
  isEntityAFile,
  isDefaultModule,
  getIndexFileName,
  getEmptyStringPromise,
  getTypesIndexFileName,
  isFindDirEntDataError,
  getNamedExportStatement,
  isFindIndexFileNameError,
  getDefaultExportStatement,
  getDirEntDataErrorMessage,
  isFindExportStatementError,
  getNamedTypeExportStatement,
  getIndexFileNameErrorMessage,
  getExportStatementErrorMessage,
} from '@helpers';

import type {
  IGetDirEntDataConditions,
  IGetErrorMessageConditions,
  IGetIndexFileNameConditions,
  IGetExportStatementConditions,
} from '@types';

export const getErrorMessageConditions: IGetErrorMessageConditions = (reason) => {
  return [
    {
      checkCondition: () => isFindIndexFileNameError(reason),
      getResult: () => getIndexFileNameErrorMessage(),
    },
    {
      checkCondition: () => isFindExportStatementError(reason),
      getResult: () => getExportStatementErrorMessage(),
    },
    {
      checkCondition: () => isFindDirEntDataError(reason),
      getResult: () => getDirEntDataErrorMessage(),
    },
  ];
};

export const getDirEntDataConditions: IGetDirEntDataConditions = (dirEnt, dirEntPath) => {
  return [
    {
      checkCondition: () => isEntityAFile(dirEnt),
      getResult: () => readFileData(dirEntPath),
    },
    {
      checkCondition: () => !isEntityAFile(dirEnt),
      getResult: () => getEmptyStringPromise(),
    },
  ];
};

export const getIndexFileNameConditions: IGetIndexFileNameConditions = (parentPath) => {
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

export const getExportStatementConditions: IGetExportStatementConditions = (
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
