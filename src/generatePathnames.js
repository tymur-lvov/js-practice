import * as fs from 'fs/promises';
import * as path from 'path';

import pathnameStore from './pathnameStoreCreator.js';

const generatePathnames = async (dirPath, relativeDir) => {
  const subDirs = await fs.readdir(dirPath);

  const pathnames = await Promise.all(
    subDirs.map(async (subDir) => {
      const subDirPath = path.resolve(dirPath, subDir);
      const subDirInfo = await fs.lstat(subDirPath);

      const isDirectory = subDirInfo.isDirectory();
      const isPathnameStored = pathnameStore.isPathnameStored();
      const isIncludesRelativeDir = subDirPath.includes(relativeDir);

      if (!isDirectory && !isPathnameStored && isIncludesRelativeDir) {
        pathnameStore.storePathname(subDirPath);
      }

      if (!isDirectory) {
        return subDir === 'index.ts' ? [] : subDirPath;
      } else {
        return await generatePathnames(subDirPath, relativeDir);
      }
    })
  );

  return pathnames.flat();
};

export default generatePathnames;
