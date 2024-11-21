import {
  getConfigProp,
  getDirEntsRecurs,
  getAbsolutePath,
  filterFiles,
  filterFilesToInclude,
  getDirEntPath,
  getFileData,
} from '@helpers';

const main = async () => {
  const targetDirRelPaths = getConfigProp('targetDirPaths');

  const targetDirPaths = targetDirRelPaths.map(getAbsolutePath);

  const targetDirsEnts = await Promise.all(targetDirPaths.map(getDirEntsRecurs));

  const nestedFiles = targetDirsEnts.map(filterFiles);

  const filesToInclude = nestedFiles.map(filterFilesToInclude);

  const dirsFilePaths = filesToInclude.map(getDirEntPath);

  const filesData = await Promise.all(dirsFilePaths.map(getFileData));
  console.log(filesData);
};

main();
