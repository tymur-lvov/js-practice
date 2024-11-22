import { getConfigOption } from '@helpers';

import type { Dirent } from 'fs';

const filesToExclude = new Set(getConfigOption('filesToExclude'));

export const filterFiles = (entities: Dirent[]): Dirent[] => {
  return entities.filter((entity) => entity.isFile());
};

export const filterFilesToInclude = (files: Dirent[]): Dirent[] => {
  return files.filter((file) => !filesToExclude.has(file.name));
};
