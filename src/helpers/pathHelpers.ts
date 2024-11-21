import { Dirent } from 'fs';
import * as path from 'path';

export const getAbsolutePaths = (absolutePaths: string[]): string[] => {
  return absolutePaths.map((absolutePath) => path.resolve(absolutePath));
};

export const getEntPaths = (dirEnts: Dirent[]): string[] => {
  return dirEnts.map(({ parentPath, name }) => path.resolve(parentPath, name));
};
