import * as fs from 'fs/promises';

import { asyncMapDecor } from '@helpers';

import type { Dirent } from 'fs';

export const getDirEntsRecurs = asyncMapDecor((dirPath: string): Promise<Dirent[]> => {
  return fs.readdir(dirPath, { withFileTypes: true, recursive: true });
});

export const getFileData = asyncMapDecor((filePath: string): Promise<string> => {
  return fs.readFile(filePath, 'utf-8');
});
