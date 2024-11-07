import { getFilePaths } from '@scripts';

const getStatements = async (srcDir: string, srcDirPath: string) => {
  const filePaths = await getFilePaths(srcDir, srcDirPath);
};

export default getStatements;
