import * as fs from 'fs/promises';

import { mapDecor } from '@helpers';

import type { Dirent } from 'fs';

export const getDirEntsRecurs = mapDecor((dirPath: string): Promise<Dirent[]> => {
  return fs.readdir(dirPath, { withFileTypes: true, recursive: true });
}, 'async');

export const getFileData = mapDecor((filePath: string): Promise<string> => {
  return fs.readFile(filePath, 'utf-8');
}, 'async');
