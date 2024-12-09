import { resolve } from 'path';

export const assignFilePaths = (files) => {
  return files.map(({ parentPath, name }) => ({
    filePath: resolve(parentPath, name),
  }));
};
