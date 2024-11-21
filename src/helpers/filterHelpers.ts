import { getConfigProp } from '@helpers';

import type { Dirent } from 'fs';

const filesToExclude = new Set(getConfigProp('filesToExclude'));

export const filterFiles = (dirEnts: Dirent[]): Dirent[] => {
  return dirEnts.filter((dirEnt) => dirEnt.isFile());
};

export const filterFilesToInclude = (files: Dirent[]): Dirent[] => {
  return files.filter((file) => !filesToExclude.has(file.name));
};
