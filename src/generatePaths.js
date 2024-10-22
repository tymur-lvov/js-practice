import * as fs from 'fs/promises';
import * as path from 'path';

import pathStore from './pathStoreCreator.js';

const generatePaths = async (dirPath, relativeDir) => {
  const subDirs = await fs.readdir(dirPath);

  const paths = await Promise.all(
    subDirs.map(async (subDir) => {
      const subDirPath = path.resolve(dirPath, subDir);
      const subDirInfo = await fs.lstat(subDirPath);

      const isDirectory = subDirInfo.isDirectory();
      const isPathStored = pathStore.isPathStored();
      const isIncludesRelativeDir = subDirPath.includes(relativeDir);

      if (!isDirectory && !isPathStored && isIncludesRelativeDir) {
        pathStore.storePath(subDirPath);
      }

      if (!isDirectory) {
        return subDir === 'index.ts' ? [] : subDirPath;
      } else {
        return await generatePaths(subDirPath, relativeDir);
      }
    })
  );

  return paths.flat();
};

export default generatePaths;
