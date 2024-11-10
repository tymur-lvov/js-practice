import * as fs from 'fs/promises';
import * as path from 'path';

import reExportsConfig from '@config';

import { getStatements, ReExport, decorAsyncFunc } from '@utils';

const generateReExports = async () => {
  const { srcDirPaths: relativePaths } = reExportsConfig;

  const srcDirPaths = relativePaths.map((relativePath) => path.resolve(relativePath));

  const reExports = await Promise.all(
    srcDirPaths.map(async (srcDirPath) => {
      const srcFile = srcDirPath.includes('@types') ? 'index.types.ts' : 'index.ts';

      const srcFilePath = path.resolve(srcDirPath, srcFile);

      const statements = await getStatements(srcDirPath);

      return new ReExport(srcFilePath, statements);
    })
  );

  reExports.forEach(({ srcFilePath, statements }) => {
    fs.writeFile(srcFilePath, statements.join('\n'));
  });
};

decorAsyncFunc(generateReExports)();
