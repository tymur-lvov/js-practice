import { getFilePaths, getVariableNames, produceStatementsFromTemplate } from '@scripts';

const getStatements = async (srcDir: string, srcDirPath: string): Promise<string[]> => {
  const filePaths = await getFilePaths(srcDir, srcDirPath);

  const variableNames = getVariableNames(filePaths);

  return produceStatementsFromTemplate(filePaths, variableNames);
};

export default getStatements;
