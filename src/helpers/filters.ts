import { isEntityAFile, isFileToBeIncluded } from './predicates';

export const filterFiles = (dirEnts) => {
  return dirEnts.filter(isEntityAFile);
};

export const filterFilesToInclude = (files) => {
  return files.filter(isFileToBeIncluded);
};
