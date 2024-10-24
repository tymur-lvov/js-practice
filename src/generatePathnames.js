import * as fs from 'fs/promises';
import * as path from 'path';

import pathnameStore from './createPathnameStore.js';
import errorCathingDecor from './errorCathingDecor.js';
import allowToStorePathname from './allowToStorePathname.js';

const generatePathnames = async (dirPathname, reExportsFileDir) => {
  const subDirs = await fs.readdir(dirPathname);

  const pathnames = await Promise.all(
    subDirs.map(async (subDir) => {
      const subDirPathname = path.resolve(dirPathname, subDir);

      const subDirInfo = await fs.lstat(subDirPathname);

      const isAllowedToStorePathname = allowToStorePathname(subDirInfo, subDirPathname, reExportsFileDir);

      if (isAllowedToStorePathname) pathnameStore.storePathname(subDirPathname);

      const isSubDirDirectory = subDirInfo.isDirectory();

      const isReExportsFile = subDir === 'index.ts';

      if (!isSubDirDirectory) return isReExportsFile ? [] : subDirPathname;

      return await generatePathnames(subDirPathname, reExportsFileDir);
    })
  );

  return pathnames.flat();
};

export default errorCathingDecor(generatePathnames);
