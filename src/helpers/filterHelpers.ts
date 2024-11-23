import { getConfigOption } from '@helpers';

import type { Dirent } from 'fs';

const filesToExclude = new Set(getConfigOption('filesToExclude'));

export const filterFiles = (dirEnts: Dirent[]): Dirent[] => {
  return dirEnts.filter((dirEnt) => dirEnt.isFile());
};

export const filterFilesToInclude = (files: Dirent[]): Dirent[] => {
  return files.filter(({ name }) => !filesToExclude.has(name));
};
