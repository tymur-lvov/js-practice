import * as fs from 'fs/promises';
import * as path from 'path';

const rootPath = path.resolve('src');

const getPathnames = async (currentPath) => {
  const pathnames = [];
  const basenames = await fs.readdir(currentPath);

  for (const basename of basenames) {
    const entity = await fs.lstat(path.resolve(currentPath, basename));

    if (!entity.isDirectory()) {
      pathnames.push(path.resolve(currentPath, basename));
    } else {
      pathnames.push(
        ...(await getPathnames(path.resolve(currentPath, basename)))
      );
    }
  }

  return pathnames;
};

const pathnames = await getPathnames(rootPath);

console.log(pathnames);

export default getPathnames;
