import {
  asyncCompose,
  filterFiles,
  filterFilesToInclude,
  filterModules,
  getAbsolutePath,
  getIConfigOption,
  getDirEntPath,
  getDirEntsRecurs,
  getFileData,
  mapDecor,
} from '@helpers';

const processFilePaths = async (arg: any): Promise<any> => {
  const filePaths = await asyncCompose(
    getAbsolutePath,
    getDirEntsRecurs,
    filterFiles,
    filterFilesToInclude,
    mapDecor(getDirEntPath)
  )(arg);

  return { filePaths };
};

const processModulePaths = async (arg: any): Promise<any> => {
  //   const modulePaths = await asyncCompose(filterModules)(arg);
};

const finalComposition = async () => {
  const composition = asyncCompose(processFilePaths, processModulePaths);

  return Promise.all(getIConfigOption('targetDirPaths').map(composition));
};

console.log(await processFilePaths('./src/helpers'));

// finalComposition();
