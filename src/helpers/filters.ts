export const filterFiles = (dirEnts) => {
  return dirEnts.filter((dirEnt) => dirEnt.isFile()); // Make predicate
};
