import path from 'path';

import type { IProcessFilePath } from '@types';

export const processFilePath: IProcessFilePath = (dirPath) => {
  const absolutePath = path.resolve(dirPath);

  if (absolutePath.includes('@types')) {
    return `${absolutePath}/index.types.ts`;
  }

  return `${absolutePath}/index.ts`;
};
