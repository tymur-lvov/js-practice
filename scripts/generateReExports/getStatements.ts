import { getFilePaths, getVariableNames } from '@scripts';

const getStatements = async (srcDir: string, srcDirPath: string) => {
  const filePaths = await getFilePaths(srcDir, srcDirPath);

  const variableNames = getVariableNames(filePaths);
  console.log(variableNames);
};

export default getStatements;
