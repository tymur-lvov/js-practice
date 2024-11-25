import { getIConfigOption } from '@helpers';

import type { Dirent } from 'fs';

const filesToExclude = new Set(getIConfigOption('filesToExclude'));

export const filterFiles = (dirEnts: Dirent[]): Dirent[] => {
  return dirEnts.filter((dirEnt) => dirEnt.isFile());
};

export const filterFilesToInclude = (files: Dirent[]): Dirent[] => {
  return files.filter(({ name }) => !filesToExclude.has(name));
};

export const filterModules = (filePaths: string[]): string[] => {
  return filePaths.filter((filePath) => /\.(ts|tsx)$/.test(filePath));
};
