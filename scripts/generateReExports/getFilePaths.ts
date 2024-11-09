import * as fs from 'fs/promises';
import * as path from 'path';

import genrexConfig from '@config';

import { processFilePath } from '@scripts';

import tryCatchDecor from './tryCatchDecor';

const getFilePaths = async (srcDirPath: string): Promise<string[]> => {
  const { excludedFiles: excludedFilesArray } = genrexConfig;

  const excludedFiles = new Set(excludedFilesArray);

  const srcDir = path.basename(srcDirPath);

  const entities = await fs.readdir(srcDirPath, { withFileTypes: true, recursive: true });

  const filePaths = entities
    .filter((entity) => entity.isFile() && !excludedFiles.has(entity.name))

    .map((file) => path.resolve(file.parentPath, file.name));

  return filePaths.map((filePath) => processFilePath(srcDir, filePath));
};

export default tryCatchDecor(getFilePaths);
