import * as path from 'path';

export const transformPathToAbsolute = (relativePath: string): string => {
  return path.resolve(relativePath);
};
