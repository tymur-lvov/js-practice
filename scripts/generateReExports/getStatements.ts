import { getFilePaths, getVariableNames, produceStatements } from '@scripts';

const getStatements = async (srcDir: string, srcDirPath: string): Promise<string[]> => {
  const filePaths = await getFilePaths(srcDir, srcDirPath);

  const varNames = getVariableNames(filePaths);

  return produceStatements(filePaths, varNames);
};

export default getStatements;
