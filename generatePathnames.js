import * as fs from 'fs/promises';
import * as path from 'path';

import pathnameStore from './pathnameStoreCreator.js';

const generatePathnames = async (dirPath, relativeDir) => {
  const subDirs = await fs.readdir(dirPath);

  const pathnames = await Promise.all(
    subDirs.map(async (subDir) => {
      const subDirPath = path.resolve(dirPath, subDir);
      const subDirInfo = await fs.lstat(subDirPath);

      const isDirDirectory = subDirInfo.isDirectory();
      const isPathnameStored = pathnameStore.isPathnameStored();
      const isIncludesRelativeDir = subDirPath.includes(relativeDir);

      if (!isDirDirectory && !isPathnameStored && isIncludesRelativeDir) {
        pathnameStore.storePathname(subDirPath);
      }

      if (!isDirDirectory) {
        return subDir === 'index.js' ? [] : subDirPath;
      } else {
        return await generatePathnames(subDirPath, relativeDir);
      }
    })
  );

  return pathnames.flat();
};

export default generatePathnames;
