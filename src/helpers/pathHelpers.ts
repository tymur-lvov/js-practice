import * as path from 'path';

import type { Dirent } from 'fs';

export const getAbsolutePath = (absolutePath: string): string => {
  return path.resolve(absolutePath);
};

export const getDirEntityPath = ({ parentPath, name }: Dirent): string => {
  return path.resolve(parentPath, name);
};
