import * as fs from 'fs/promises';

import type { Dirent } from 'fs';

export const getDirEnts = (
  path: string,
  recursive: string | boolean = false
): Promise<Dirent[]> => {
  return fs.readdir(path, { withFileTypes: true, recursive: Boolean(recursive) });
};
