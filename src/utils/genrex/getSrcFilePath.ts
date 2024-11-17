import { getSrcFileName, resolvePaths } from '@utils';

const getSrcFilePath = (srcDirPath: string): string => {
  const srcFileName = getSrcFileName(srcDirPath);

  return resolvePaths(srcDirPath, srcFileName);
};

export default getSrcFilePath;
