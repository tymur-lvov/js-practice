import { isEntityAFile, isFileToBeIncluded } from '@helpers';

import type { IFilterFilesToInclude, IFilterFiles } from '@types';

export const filterFiles: IFilterFiles = (dirEnts) => {
  return dirEnts.filter((dirEnt) => isEntityAFile(dirEnt));
};

export const filterFilesToInclude: IFilterFilesToInclude = (dirEnts) => {
  return dirEnts.filter((dirEnt) => isFileToBeIncluded(dirEnt));
};
