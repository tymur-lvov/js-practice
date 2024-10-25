import * as fs from 'fs/promises';
import * as path from 'path';

import pathnameStore from './producePathnameStore.js';
import errorCathingDecor from './errorCathingDecor.js';
import allowToStorePathname from './allowToStorePathname.js';

const produceReExportsPaths = async (dirPathname, reExportsDirPath) => {
  const subDirs = await fs.readdir(dirPathname);

  const pathnames = await Promise.all(
    subDirs.map(async (subDir) => {
      const subDirPathname = path.resolve(dirPathname, subDir);

      const subDirInfo = await fs.lstat(subDirPathname);

      const isAllowedToStorePathname = allowToStorePathname(subDirInfo, subDirPathname, reExportsDirPath);

      if (isAllowedToStorePathname) pathnameStore.storePathname(subDirPathname);

      const isSubDirDirectory = subDirInfo.isDirectory();

      const isFileOfReExports = subDir === 'index.ts';

      if (!isSubDirDirectory) return isFileOfReExports ? [] : subDirPathname;

      return await produceReExportsPaths(subDirPathname, reExportsDirPath);
    })
  );

  return pathnames.flat();
};

export default errorCathingDecor(produceReExportsPaths);
