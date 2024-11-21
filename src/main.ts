import {
  getConfigProp,
  getDirEnts,
  getAbsolutePaths,
  filterFiles,
  filterFilesToInclude,
  getEntPaths,
  getFileData,
} from '@helpers';

const main = async () => {
  const targetDirRelPaths = getConfigProp('targetDirPaths');

  const targetDirPaths = getAbsolutePaths(targetDirRelPaths);

  const targetDirsEnts = await Promise.all(
    targetDirPaths.map((dirPath) => getDirEnts(dirPath, 'recursive'))
  );

  const nestedFiles = targetDirsEnts.map((dirEnts) => filterFiles(dirEnts));

  const filesToInclude = nestedFiles.map((files) => filterFilesToInclude(files));

  const dirsFilePaths = filesToInclude.map((files) => getEntPaths(files));

  const filesData = await Promise.all(dirsFilePaths.map(getFileData));
  console.log(filesData);
};

main();
