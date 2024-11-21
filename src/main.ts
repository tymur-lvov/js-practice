import {
  getConfigProp,
  getDirEnts,
  getAbsolutePath,
  filterFiles,
  filterFilesToInclude,
  getEntPaths,
} from '@helpers';

const main = async () => {
  const targetDirRelPaths = getConfigProp('targetDirPaths');

  const targetDirPaths = targetDirRelPaths.map((relPath) => getAbsolutePath(relPath));

  const targetDirsEnts = await Promise.all(
    targetDirPaths.map((dirPath) => getDirEnts(dirPath, 'recursive'))
  );

  const nestedFiles = targetDirsEnts.map((dirEnts) => filterFiles(dirEnts));

  const filesToInclude = nestedFiles.map((files) => filterFilesToInclude(files));

  const filePaths = filesToInclude.map((files) => getEntPaths(files));
};

main();
