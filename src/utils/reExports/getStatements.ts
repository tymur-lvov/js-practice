import { getFilePaths, getVarNames, produceStatements, tryCatchDecor } from '@utils';

const getStatements = async (srcDirPath: string): Promise<string[]> => {
  const filePaths = await getFilePaths(srcDirPath);

  const varNames = getVarNames(filePaths);

  return produceStatements(filePaths, varNames);
};

export default tryCatchDecor(getStatements);
