import { resolve } from 'path';
import { indexFileName, typeDirName, typesIndexFileName } from './constants';

export const findIndexFilePathCondition = (dirPath) => {
  if (!dirPath.includes(typeDirName)) {
    return resolve(dirPath, indexFileName);
  }

  return resolve(dirPath, typesIndexFileName);
};

export const findStatementCondition = (context) => {
  const { relativePath, varName } = context;

  if (!varName) {
    if (!relativePath.includes(typeDirName)) {
      return { ...context, condition: 'namedExport' };
    }

    return { ...context, condition: 'typeNamedExport' };
  }

  return { ...context, condition: 'defaultExport' };
};
