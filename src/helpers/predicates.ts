import { getItemsToExclude } from './misc';

export const isEntityAFile = (dirEnt) => {
  return dirEnt.isFile();
};

export const isFileToInclude = ({ parentPath, name }) => {
  const itemsToExclude = getItemsToExclude();

  return !itemsToExclude.some((item) => parentPath.includes(item) || name === item);
};
