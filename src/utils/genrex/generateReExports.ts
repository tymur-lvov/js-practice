import {
  getStatements,
  ReExport,
  decorAsyncFunc,
  resolvePath,
  resolvePaths,
  getSrcFileName,
  writeReExportFiles,
  genrexConfig,
} from '@utils';

const generateReExports = async () => {
  const srcDirRelativePaths = genrexConfig.getSrcDirPaths();

  const srcDirPaths = srcDirRelativePaths.map(resolvePath);

  const reExports = await Promise.all(
    srcDirPaths.map(async (srcDirPath) => {
      const srcFileName = getSrcFileName(srcDirPath);

      const srcFilePath = resolvePaths(srcDirPath, srcFileName);

      const statements = await getStatements(srcDirPath);

      return new ReExport(srcFilePath, statements);
    })
  );

  writeReExportFiles(reExports);
};

decorAsyncFunc(generateReExports)();
