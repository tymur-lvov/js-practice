import * as fs from 'fs/promises';

import { Dirent } from 'fs';

export const getDirEntities = (
  path: string,
  recursive: string | boolean = false
): Promise<Dirent[]> => {
  return fs.readdir(path, { withFileTypes: true, recursive: Boolean(recursive) });
};
