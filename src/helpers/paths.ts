import * as path from 'path';

import { mapDecor } from '@helpers';

import type { Dirent } from 'fs';

export const getAbsolutePath = mapDecor((absolutePath: string): string => {
  return path.resolve(absolutePath);
});

export const getDirEntPath = mapDecor(({ parentPath, name }: Dirent): string => {
  return path.resolve(parentPath, name);
});
