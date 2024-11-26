import {
  asyncCompose,
  filterFiles,
  filterFilesToInclude,
  filterModules,
  getAbsolutePath,
  getConfigOption,
  getDirEntPath,
  getDirEntsRecurs,
  getFileData,
  mapDecor,
} from '@helpers';

const processFilePaths = async (data: any): Promise<any> => {
  const filePaths = await asyncCompose(
    getAbsolutePath,
    getDirEntsRecurs,
    filterFiles,
    filterFilesToInclude,
    getDirEntPath
  )(data);

  return { filePaths };
};

const processModulePaths = async (data: any): Promise<any> => {
  //   const modulePaths = await asyncCompose(filterModules)(arg);
};

const finalComposition = async () => {
  const composition = asyncCompose(processFilePaths, processModulePaths);

  return Promise.all(getConfigOption('targetDirPaths').map(composition));
};

console.log(await processFilePaths('./src/helpers'));

// finalComposition();
