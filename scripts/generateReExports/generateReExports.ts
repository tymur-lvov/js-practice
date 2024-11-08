import path from 'path';

import genrexConfig from '@config';

import { getSrcDir, getStatements, ReExport, tryCatchDecorator } from '@scripts';

const generateReExports = async () => {
  const { srcDirPaths: relativePaths } = genrexConfig;

  const srcDirPaths = relativePaths.map((srcDirPath) => path.resolve(srcDirPath));

  const reExports = await Promise.all(
    srcDirPaths.map(async (srcDirPath) => {
      const srcDir = getSrcDir(srcDirPath);

      const statements = await getStatements(srcDir, srcDirPath);

      return new ReExport(srcDir, statements);
    })
  );
  console.log(reExports);
};

tryCatchDecorator(generateReExports)();
