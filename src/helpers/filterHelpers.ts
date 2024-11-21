import { Dirent } from 'fs';

export const filterFiles = (dirEnts: Dirent[]): Dirent[] => {
  return dirEnts.filter((dirEnt) => dirEnt.isFile());
};
