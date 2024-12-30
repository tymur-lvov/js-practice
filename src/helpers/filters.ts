import type {
  FilterFilesToIncludeType,
  FilterFilesType,
  FilterModulesType,
} from '../../@types/helpers.types';
import { isEntityAFile, isFileAModule, isFileToBeIncluded } from './predicates';

export const filterFiles: FilterFilesType = (dirEnts) => {
  return dirEnts.filter(({ dirEntInfo }) => isEntityAFile(dirEntInfo));
};

export const filterFilesToInclude: FilterFilesToIncludeType = (dirEnts) => {
  return dirEnts.filter(({ dirEntInfo }) => isFileToBeIncluded(dirEntInfo));
};

export const filterModules: FilterModulesType = (dirEnts) => {
  return dirEnts.filter(({ dirEntInfo, dirEntData }) => isFileAModule(dirEntInfo.name, dirEntData));
};
