import * as path from 'path';
import * as fs from 'fs/promises';

import { filterModules, getFileEntsRecurs } from '@helpers';

import type { IProcessFileData, IProcessFilePath } from '@types';

export const processFilePath: IProcessFilePath = (dirPath) => {
  if (dirPath.includes('@types')) {
    return `${dirPath}/index.types.ts`;
  }

  return `${dirPath}/index.ts`;
};

export const processFileData: IProcessFileData = async (dirPath) => {
  const fileEnts = await getFileEntsRecurs(dirPath);

  const files = await Promise.all(
    fileEnts.map(async ({ parentPath, name }) => {
      const filePath = path.resolve(parentPath, name);
      const fileData = await fs.readFile(filePath, 'utf-8');

      return { filePath, fileData };
    })
  );

  const modules = filterModules(files);

  return '';
};
