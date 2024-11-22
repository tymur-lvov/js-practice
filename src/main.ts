import {
  getDirEntsRecurs,
  getAbsolutePath,
  filterFiles,
  filterFilesToInclude,
  getDirEntPath,
  getFileData,
  composeFuncs,
} from '@helpers';

const fileNameProcessor = (fileName: any) => {
  return { fileName };
};

const filePathsProccessor = async (prevResult: any) => {
  const values = Object.values(prevResult);
  const lastValue = Object.values(prevResult)[values.length - 1];

  return {
    ...prevResult,
    filePaths: await composeFuncs(
      'async',
      getAbsolutePath,
      getDirEntsRecurs,
      filterFiles,
      filterFilesToInclude,
      getDirEntPath,
      getFileData
    )(lastValue),
  };
};

console.log(await filePathsProccessor(fileNameProcessor('./test/utils')));
