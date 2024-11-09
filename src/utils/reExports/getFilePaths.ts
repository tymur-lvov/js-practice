import * as fs from 'fs/promises';
import * as path from 'path';

import reExportsConfig from '@config';

import { errorHandleDecor, processFilePath } from '@utils';

const getFilePaths = async (srcDirPath: string): Promise<string[]> => {
  const { excludedFiles: excludedFilesArray } = reExportsConfig;

  const excludedFiles = new Set(excludedFilesArray);

  const srcDir = path.basename(srcDirPath);

  const dirEntities = await fs.readdir(srcDirPath, { withFileTypes: true, recursive: true });

  const filePaths = dirEntities
    .filter((entity) => entity.isFile() && !excludedFiles.has(entity.name))

    .map((file) => path.resolve(file.parentPath, file.name));

  return filePaths.map((filePath) => processFilePath(srcDir, filePath));
};

export default errorHandleDecor(getFilePaths);
