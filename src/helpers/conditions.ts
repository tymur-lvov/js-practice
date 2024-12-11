import { resolve } from 'path';
import { indexFileName, typesDirName, typesIndexFileName } from './constants';

export const indexFilePathConditions = [
  {
    condition: (dirPath) => {
      if (!dirPath.includes(typesDirName)) {
        return resolve(dirPath, indexFileName);
      }
    },
  },
  {
    condition: (dirPath) => {
      if (dirPath.includes(typesDirName)) {
        return resolve(dirPath, typesIndexFileName);
      }
    },
  },
];
