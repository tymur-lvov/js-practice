import { getItemsToExclude } from './misc';
import { isEntityFile } from './predicates';

export const filterFiles = (dirEnts) => {
  return dirEnts.filter((dirEnt) => isEntityFile(dirEnt));
};

export const filterFilePathsToInclude = (filePaths) => {
  const itemsToExclude = getItemsToExclude();

  return filePaths.filter((filePath) => !itemsToExclude.some((item) => filePath.includes(item)));
};
