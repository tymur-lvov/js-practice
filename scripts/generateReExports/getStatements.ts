import { getFilePaths, getVariableNames, produceStatements, tryCatchDecorator } from '@scripts';

const getStatements = async (srcDir: string, srcDirPath: string): Promise<string[]> => {
  const filePaths = await getFilePaths(srcDir, srcDirPath);

  const varNames = getVariableNames(filePaths);

  return produceStatements(filePaths, varNames);
};

export default tryCatchDecorator(getStatements);
