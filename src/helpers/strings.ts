import { compose } from './composers';
import { getDirEnts } from './files';
import { filterFiles, filterFilesToInclude } from './filters';
import { getFilePaths } from './paths';

export const createIndexFileData = (parentPath, modulePaths) => {
  console.log(parentPath);
  console.log(modulePaths);
};

export const getIndexFileData = async (parentPath) => {
  const modulePaths = await getModulePaths(parentPath);

  return createIndexFileData(parentPath, modulePaths);
};

export const getModulePaths = async (parentPath) => {
  const dirEnts = await getDirEnts(parentPath);

  const files = compose(filterFiles, filterFilesToInclude)(dirEnts);

  return getFilePaths(files);
};
