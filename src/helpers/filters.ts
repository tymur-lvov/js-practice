import { isEntityAFile, isFileAModule, isFileToBeIncluded } from './predicates';

export const filterFiles = (dirEnts) => {
  return dirEnts.filter(({ dirEntInfo }) => isEntityAFile(dirEntInfo));
};

export const filterFilesToInclude = (dirEnts) => {
  return dirEnts.filter(({ dirEntInfo }) => isFileToBeIncluded(dirEntInfo));
};

export const filterModules = (dirEnts) => {
  return dirEnts.filter(({ dirEntInfo, dirEntData }) => isFileAModule(dirEntInfo.name, dirEntData));
};
