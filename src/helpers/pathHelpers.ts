import { Dirent } from 'fs';
import * as path from 'path';

export const getAbsolutePath = (...pathParts: string[]): string => {
  return path.resolve(...pathParts);
};

export const getEntPaths = (dirEnts: Dirent[]): string[] => {
  return dirEnts.map(({ parentPath, name }) => path.resolve(parentPath, name));
};
