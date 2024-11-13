import * as fs from 'fs/promises';

import { Dirent } from 'fs';

import { IGetEntitiesConfig } from '@types';

const getEntities = (srcDirPath: string, recursive: string): Promise<Dirent[]> => {
  const getEntitiesConfig: IGetEntitiesConfig = { withFileTypes: true };

  if (recursive) Object.assign(getEntitiesConfig, { recursive: true });

  return fs.readdir(srcDirPath, getEntitiesConfig);
};

export default getEntities;
