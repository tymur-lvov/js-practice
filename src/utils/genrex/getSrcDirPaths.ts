import genrexConfig from '@config';

import { resolvePath } from '@utils';

const getSrcDirPaths = (): string[] => {
  const srcDirRelativePaths = genrexConfig.srcDirPaths;

  return srcDirRelativePaths.map(resolvePath);
};

export default getSrcDirPaths;
