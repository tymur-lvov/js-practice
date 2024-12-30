import type {
  IFilterFilesToInclude,
  IFilterFiles,
  IFilterModules,
} from '../../@types/helpers.types';
import { isEntityAFile, isFileAModule, isFileToBeIncluded } from './predicates';

export const filterFiles: IFilterFiles = (dirEnts) => {
  return dirEnts.filter(({ dirEntInfo }) => isEntityAFile(dirEntInfo));
};

export const filterFilesToInclude: IFilterFilesToInclude = (dirEnts) => {
  return dirEnts.filter(({ dirEntInfo }) => isFileToBeIncluded(dirEntInfo));
};

export const filterModules: IFilterModules = (dirEnts) => {
  return dirEnts.filter(({ dirEntInfo, dirEntData }) => isFileAModule(dirEntInfo.name, dirEntData));
};
