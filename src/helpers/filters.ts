import { isEntityFile } from './predicates';

export const filterFiles = (dirEnts) => {
  return dirEnts.filter((dirEnt) => isEntityFile(dirEnt));
};
