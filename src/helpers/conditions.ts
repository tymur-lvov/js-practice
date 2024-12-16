import { indexFileName, typesDirName, typesIndexFileName } from '../constants';

export const getIndexFileNameConditions = (parentPath) => {
  return [
    { condition: () => !parentPath.includes(typesDirName), result: indexFileName },

    { condition: () => parentPath.includes(typesDirName), result: typesIndexFileName },
  ];
};
