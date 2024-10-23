import * as fs from 'fs/promises';
import * as path from 'path';

import pathnameStore from './createPathnameStore.js';
import errorCathingDecor from './errorCathingDecor.js';
import validateTostorePathname from './validateTostorePathname.js';

const generatePathnames = async (dirPathname, relativeDir) => {
  const subDirs = await fs.readdir(dirPathname);

  const pathnames = await Promise.all(
    subDirs.map(async (subDir) => {
      const subDirPathname = path.resolve(dirPathname, subDir);

      const subDirInfo = await fs.lstat(subDirPathname);

      const isSubDirDirectory = subDirInfo.isDirectory();

      const isValidTostorePathname = validateTostorePathname(
        subDirPathname,
        subDirInfo,
        relativeDir
      );

      if (isValidTostorePathname) {
        pathnameStore.storePathname(subDirPathname);
      }

      if (!isSubDirDirectory) {
        return subDir === 'index.ts' ? [] : subDirPathname;
      }

      return await generatePathnames(subDirPathname, relativeDir);
    })
  );

  return pathnames.flat();
};

export default errorCathingDecor(generatePathnames);
