import { decorAsyncFunc, processFilePaths, extractFilePaths, getDirEntities } from '@utils';

const getFilePaths = async (srcDirPath: string): Promise<string[]> => {
  const dirEntities = await getDirEntities(srcDirPath, 'recursive');

  const filePaths = await extractFilePaths(dirEntities);

  return processFilePaths(srcDirPath, filePaths);
};

export default decorAsyncFunc(getFilePaths);
