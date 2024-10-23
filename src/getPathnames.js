import * as path from 'path';
import * as fs from 'fs/promises';

import pathStore from './createPathStore.js';

const srcPath = path.resolve('src');

const getPathnames = async (dirPath = srcPath) => {
  const subDirs = await fs.readdir(dirPath);

  const paths = [];

  for (const subDir of subDirs) {
    const subDirPath = path.resolve(dirPath, subDir);

    const subDirInfo = await fs.lstat(subDirPath);

    if (!subDirInfo.isDirectory()) {
      subDir === 'index.js' ? null : paths.push(subDirPath);
    } else {
      paths.push(...(await getPathnames(subDirPath)));
    }

    if (paths.length === 1) {
      pathStore.storePath(paths[0]);
    }
  }

  return paths;
};

export default getPathnames;
