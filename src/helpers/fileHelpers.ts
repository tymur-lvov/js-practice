import * as fs from 'fs/promises';

import { mapDecor } from '@helpers';

import type { Dirent } from 'fs';

export const getDirEnts = (
  path: string,
  recursive: string | boolean = false
): Promise<Dirent[]> => {
  return fs.readdir(path, { withFileTypes: true, recursive: Boolean(recursive) });
};

export const getFileData = mapDecor((filePath: string): Promise<string> => {
  return fs.readFile(filePath, 'utf-8');
}, 'async');
