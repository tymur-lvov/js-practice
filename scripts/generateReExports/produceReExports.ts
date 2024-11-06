import * as fs from 'fs/promises';
import * as path from 'path';

import genrexConfig from '@config';

const produceReExports = async (srcFileDirs: string[]) => {
  const { ignoredFiles: ignoredFilesArray } = genrexConfig;

  const ignoredFiles = new Set(ignoredFilesArray);

  const srcFileDirPaths = srcFileDirs.map((srcFileDir) => path.resolve(srcFileDir));

  const result = await Promise.all(
    srcFileDirPaths.map(async (srcFileDirPath) => {
      const entities = await fs.readdir(srcFileDirPath, { withFileTypes: true, recursive: true });

      return entities
        .filter((entity) => entity.isFile() && !ignoredFiles.has(entity.name))

        .map((file) => path.resolve(file.parentPath, file.name));
    })
  );

  console.log(result);
};

export default produceReExports;
