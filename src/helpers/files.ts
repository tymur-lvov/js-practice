import * as fs from 'fs/promises';
import * as path from 'path';

import { isItemToExclude } from '@helpers';

import type { Dirent } from 'fs';
import type { IGetFileEnts } from '@types';

export const getFileEnts: IGetFileEnts = async (dirPath) => {
  const dirEnts = await fs.readdir(dirPath, { withFileTypes: true });

  return dirEnts.reduce(async (filesAccPromise: Promise<Dirent[]>, dirEnt) => {
    if (isItemToExclude(dirEnt.name)) {
      return filesAccPromise;
    }

    const filesAcc = await filesAccPromise;

    if (dirEnt.isFile()) {
      filesAcc.push(dirEnt);
    } else {
      const dirPath = path.resolve(dirEnt.parentPath, dirEnt.name);

      filesAcc.push(...(await getFileEnts(dirPath)));
    }

    return filesAcc;
  }, Promise.resolve([]));
};
