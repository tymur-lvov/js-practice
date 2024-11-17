import * as fs from 'fs/promises';

import { Dirent } from 'fs';

import { IReadDirConfig } from '@types';

const getDirEntities = (srcDirPath: string, recursive: string): Promise<Dirent[]> => {
  const readDirConfig: IReadDirConfig = { withFileTypes: true };

  if (recursive) Object.assign(readDirConfig, { recursive: true });

  return fs.readdir(srcDirPath, readDirConfig);
};

export default getDirEntities;
