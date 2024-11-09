import { getFilePaths, getVariableNames, produceStatements, tryCatchDecor } from '@utils';

const getStatements = async (srcDirPath: string): Promise<string[]> => {
  const filePaths = await getFilePaths(srcDirPath);

  const varNames = getVariableNames(filePaths);

  return produceStatements(filePaths, varNames);
};

export default tryCatchDecor(getStatements);
