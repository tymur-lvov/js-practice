import { decorAsyncFunc, generateStatements, ReExport, getSrcFilePath } from '@utils';

const generateReExportData = async (srcDirPath: string): Promise<ReExport> => {
  const srcFilePath = getSrcFilePath(srcDirPath);

  const statements = await generateStatements(srcDirPath);

  return new ReExport(srcFilePath, statements);
};

export default decorAsyncFunc(generateReExportData);
