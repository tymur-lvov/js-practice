import { genrexConfig, resolvePath } from '@utils';

const getSrcDirPaths = (): string[] => {
  const srcDirRelativePaths = genrexConfig.getSrcDirPaths();

  return srcDirRelativePaths.map(resolvePath);
};

export default getSrcDirPaths;
