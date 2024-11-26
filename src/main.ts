import {
  asyncCompose,
  filterFiles,
  filterFilesToInclude,
  filterPotentialModules,
  getAbsolutePath,
  getConfigOption,
  getDirEntPath,
  getDirEntsRecurs,
  getFileData,
} from '@helpers';

const processFilePaths = async (prevRes: any): Promise<any> => {
  const filePaths = await asyncCompose(
    getAbsolutePath,
    getDirEntsRecurs,
    filterFiles,
    filterFilesToInclude,
    getDirEntPath
  )(prevRes);

  return { filePaths };
};

const processModulePaths = async (prevRes: any): Promise<any> => {
  const { filePaths } = prevRes;

  const modulePaths = await asyncCompose(filterPotentialModules, getFileData)(filePaths);

  console.log(modulePaths);
};

const finalComposition = async () => {
  const composition = asyncCompose(processFilePaths, processModulePaths);

  return Promise.all(getConfigOption('targetDirPaths').map(composition));
};

finalComposition();
