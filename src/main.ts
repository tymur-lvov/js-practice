import { getConfigProp, getDirEnts, getAbsolutePath, filterFiles } from '@helpers';

const main = async () => {
  const targetDirRelPaths = getConfigProp('targetDirPaths');

  const targetDirPaths = targetDirRelPaths.map((relPath) => getAbsolutePath(relPath));

  const targetDirsEnts = await Promise.all(
    targetDirPaths.map((dirPath) => getDirEnts(dirPath, 'recursive'))
  );

  const files = targetDirsEnts.map((dirEnts) => filterFiles(dirEnts));
  console.log(files);
};

main();
