import * as path from 'path';
import * as fs from 'fs/promises';

import pathnameStoreCreator from './pathnameStoreCreator.js';

const rootPath = path.resolve('src');

const getPathnames = async (pathname = rootPath) => {
  const pathnames = [];
  const basenames = await fs.readdir(pathname);

  for (const basename of basenames) {
    const entity = await fs.lstat(path.resolve(pathname, basename));

    if (!entity.isDirectory()) {
      basename === 'index.js'
        ? null
        : pathnames.push(path.resolve(pathname, basename));
    } else {
      pathnames.push(...(await getPathnames(path.resolve(pathname, basename))));
    }

    if (pathnames.length === 1) {
      const pathnameStore = pathnameStoreCreator();

      pathnameStore.savePathname(pathnames[0]);

      console.log('result:', pathnameStore.getSavedPathname());
    }
  }

  return pathnames;
};

export default getPathnames;
