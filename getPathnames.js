import * as path from 'path';
import * as fs from 'fs/promises';

const rootPath = path.resolve('src');

const getPathnames = async (pathname = rootPath) => {
  const pathnames = [];
  const basenames = await fs.readdir(pathname);

  for (const basename of basenames) {
    const entity = await fs.lstat(path.resolve(pathname, basename));

    if (!entity.isDirectory()) {
      pathnames.push(path.resolve(pathname, basename));
    } else {
      pathnames.push(...(await getPathnames(path.resolve(pathname, basename))));
    }
  }

  return pathnames;
};

export default getPathnames;
