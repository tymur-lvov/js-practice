import path from 'path';

import genrexConfig from '@config';

import { getSrcDir, tryCatchDecorator } from '@scripts';

const generateReExports = async () => {
  const { srcDirPaths: relativePaths } = genrexConfig;

  const srcDirPaths = relativePaths.map((srcDirPath) => path.resolve(srcDirPath));

  const reExports = await Promise.all(
    srcDirPaths.map(async (srcDirPath) => {
      return {
        srcDir: getSrcDir(srcDirPath),

        //statements: getStatements(srcDirPath),
      };
    })
  );

  //console.log(reExports);
};

tryCatchDecorator(generateReExports)();
