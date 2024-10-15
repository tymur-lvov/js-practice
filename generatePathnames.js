import * as fs from 'fs/promises';
import * as path from 'path';

import pathnameStore from './pathnameStoreCreator.js';

const rootPath = path.resolve('src');

const generatePathnames = async (dirPath = rootPath) => {
  const subDirs = await fs.readdir(dirPath);

  const pathnames = await Promise.all(
    subDirs.flatMap(async (subDir) => {
      const subDirPath = path.resolve(dirPath, subDir);
      const subDirInfo = await fs.lstat(subDirPath);

      if (!pathnameStore.getStoredPathname() && !subDirInfo.isDirectory()) {
        pathnameStore.storePathname(subDirPath);
      }

      if (!subDirInfo.isDirectory()) {
        return subDir === 'index.js' ? [] : subDirPath;
      } else {
        return await generatePathnames(subDirPath);
      }
    })
  );

  return pathnames.flat();
};

export default generatePathnames;
