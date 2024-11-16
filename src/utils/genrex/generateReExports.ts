import { decorAsyncFunc, writeReExportFile, getSrcDirPaths, generateReExportData } from '@utils';

const generateReExports = async () => {
  const srcDirPaths = getSrcDirPaths();

  const reExports = await Promise.all(srcDirPaths.map(generateReExportData));

  reExports.forEach(writeReExportFile);
};

decorAsyncFunc(generateReExports)();
