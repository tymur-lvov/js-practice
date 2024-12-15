import { resolve } from 'path';
import { asyncCompose } from '../helpers/composers';
import { indexFileName, typesDirName, typesIndexFileName } from '../constants';

export const getPath = (parentPath, name) => {
  return resolve(parentPath, name);
};

export const getIndexFileNameConditions = (parentPath) => {
  return [
    { condition: () => !parentPath.includes(typesDirName), result: indexFileName },

    { condition: () => parentPath.includes(typesDirName), result: typesIndexFileName },
  ];
};

export const findIndexFileName = (parentPath) => {
  const conditions = getIndexFileNameConditions(parentPath);

  return conditions.find(({ condition }) => condition()).result;
};

export const getIndexFilePath = (parentPath) => {
  const indexFileName = findIndexFileName(parentPath);

  return { filePath: getPath(parentPath, indexFileName) };
};

export const processIndexFiles = async (parentPaths) => {
  const indexFileProcessor = asyncCompose(getIndexFilePath);

  return Promise.all(parentPaths.map(indexFileProcessor));
};
