import * as fs from 'fs/promises';
import * as path from 'path';

import genrexConfig from '@config';

import { processFilePath, tryCatchDecorator } from '@scripts';

const getFilePaths = async (srcDir: string, srcDirPath: string): Promise<string[]> => {
  const { excludedFiles: excludedFilesArray } = genrexConfig;

  const excludedFiles = new Set(excludedFilesArray);

  const entities = await fs.readdir(srcDirPath, { withFileTypes: true, recursive: true });

  const filePaths = entities
    .filter((entity) => entity.isFile() && !excludedFiles.has(entity.name))

    .map((file) => path.resolve(file.parentPath, file.name));

  return filePaths.map((filePath) => processFilePath(srcDir, filePath));
};

export default tryCatchDecorator(getFilePaths);
