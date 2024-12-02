import * as fs from 'fs/promises';
import * as path from 'path';

import { isExcludedItem } from '@helpers';

import type { Dirent } from 'fs';
import type { IGetFileEntsRecurs } from '@types';

export const getFileEntsRecurs: IGetFileEntsRecurs = async (dirPath) => {
  const dirEnts = await fs.readdir(dirPath, { withFileTypes: true });

  return dirEnts.reduce(async (filesAccPromise: Promise<Dirent[]>, dirEnt) => {
    if (isExcludedItem(dirEnt.name)) {
      return filesAccPromise;
    }

    const filesAcc = await filesAccPromise;

    if (dirEnt.isFile()) {
      filesAcc.push(dirEnt);
    } else {
      const dirPath = path.resolve(dirEnt.parentPath, dirEnt.name);

      filesAcc.push(...(await getFileEntsRecurs(dirPath)));
    }

    return filesAcc;
  }, Promise.resolve([]));
};
