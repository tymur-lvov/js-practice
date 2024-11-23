import * as fs from 'fs/promises';

import type { Dirent } from 'fs';

export const getDirEnts = (dirPath: string): Promise<Dirent[]> => {
  return fs.readdir(dirPath, { withFileTypes: true });
};

export const getFileData = (filePath: string): Promise<string> => {
  return fs.readFile(filePath, 'utf-8');
};
