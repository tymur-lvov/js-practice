import { getFilePaths, getVarNames, produceStatements, decorAsyncFunc } from '@utils';

const generateStatements = async (srcDirPath: string): Promise<string[]> => {
  const filePaths = await getFilePaths(srcDirPath);

  const varNames = getVarNames(filePaths);

  return produceStatements(filePaths, varNames);
};

export default decorAsyncFunc(generateStatements);
