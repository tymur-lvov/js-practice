import { itemsToExclude } from './constants';

const setOfItemsToExclude = new Set(itemsToExclude);

export const filterItemsToInclude = ({ dirEnts, ...context }) => {
  return {
    ...context,
    dirEnts: dirEnts.filter(({ name }) => !setOfItemsToExclude.has(name)),
  };
};

export const filterFiles = ({ dirEnts, ...context }) => {
  return {
    ...context,
    dirEnts: dirEnts.filter((dirEnt) => dirEnt.isFile()),
  };
};
