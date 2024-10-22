import * as path from 'path';
import * as fs from 'fs/promises';

import pathnameStore from './pathnameStoreCreator.js';

const srcPath = path.resolve('src');

const getPathnames = async (dirPath = srcPath) => {
  const subDirs = await fs.readdir(dirPath);

  const pathnames = [];

  for (const subDir of subDirs) {
    const subDirPath = path.resolve(dirPath, subDir);

    const subDirInfo = await fs.lstat(subDirPath);

    if (!subDirInfo.isDirectory()) {
      subDir === 'index.js' ? null : pathnames.push(subDirPath);
    } else {
      pathnames.push(...(await getPathnames(subDirPath)));
    }

    if (pathnames.length === 1) {
      pathnameStore.storePathname(pathnames[0]);
    }
  }

  return pathnames;
};

export default getPathnames;
