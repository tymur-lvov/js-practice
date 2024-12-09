import { itemsToExclude } from './constants';

export const filterFiles = (dirEnts) => {
  return dirEnts.filter((dirEnt) => dirEnt.isFile());
};

export const filterFilesToInclude = (files) => {
  return files.filter(
    ({ filePath }) => !itemsToExclude.some((itemToExclude) => filePath.includes(itemToExclude))
  );
};

export const filterModulesAndAssets = (files) => {
  return files.filter(
    ({ filePath, fileData }) => !/\.(ts|tsx)$/.test(filePath) || fileData.includes('export ')
  );
};
