import * as path from 'path';

import { getConfigOption } from '@helpers';

import type { IGetTargetDirPaths } from '@types';

export const getTargetDirPaths: IGetTargetDirPaths = () => {
  const targetDirPaths = getConfigOption('targetDirPaths');

  return targetDirPaths.map((targetDirPath) => path.resolve(targetDirPath));
};
