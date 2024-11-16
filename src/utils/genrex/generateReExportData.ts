import { decorAsyncFunc, getSrcFileName, getStatements, ReExport, resolvePaths } from '@utils';

const generateReExportData = async (srcDirPath: string): Promise<ReExport> => {
  const srcFileName = getSrcFileName(srcDirPath);

  const srcFilePath = resolvePaths(srcDirPath, srcFileName);

  const statements = await getStatements(srcDirPath);

  return new ReExport(srcFilePath, statements);
};

export default decorAsyncFunc(generateReExportData);
