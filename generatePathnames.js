import * as fs from 'fs/promises';
import * as path from 'path';

import pathnameStore from './pathnameStoreCreator.js';

const generatePathnames = async (dirPath, relativeDir) => {
  const subDirs = await fs.readdir(dirPath);

  const pathnames = await Promise.all(
    subDirs.map(async (subDir) => {
      const subDirPath = path.resolve(dirPath, subDir);
      const subDirInfo = await fs.lstat(subDirPath);

      if (
        !pathnameStore.isPathnameStored() &&
        !subDirInfo.isDirectory() &&
        subDirPath.includes(relativeDir)
      ) {
        pathnameStore.storePathname(subDirPath);
      }

      if (!subDirInfo.isDirectory()) {
        return subDir === 'index.js' ? [] : subDirPath;
      } else {
        return await generatePathnames(subDirPath, relativeDir);
      }
    })
  );

  return pathnames.flat();
};

export default generatePathnames;
