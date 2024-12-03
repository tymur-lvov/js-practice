import * as fs from 'fs/promises';
import * as path from 'path';

import { processFilePaths } from '@processors';
import { asyncCompose, isFileAModule } from '@helpers';

export const processFileData = async (dirPath) => {
  const assignFilePaths = (fileEnts) => {
    return fileEnts.map(({ parentPath, name }) => ({ filePath: path.resolve(parentPath, name) }));
  };

  const assignFilesData = (files) => {
    return Promise.all(
      files.map(async ({ filePath }) => ({
        filePath,
        fileData: await fs.readFile(filePath, 'utf-8'),
      }))
    );
  };

  const filterModules = (files) => {
    return files.filter(({ filePath, fileData }) => isFileAModule(filePath, fileData));
  };

  const res = await asyncCompose(
    processFilePaths,
    assignFilePaths,
    assignFilesData,
    filterModules
  )(dirPath);
  console.log(res);

  return '';
};
