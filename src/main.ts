import { getConfigProp, getDirEnts, getAbsolutePath } from '@helpers';

const main = async () => {
  const targetDirRelPaths = getConfigProp('targetDirPaths');
  //   console.log(targetDirPaths);

  const targetDirPaths = targetDirRelPaths.map((relPath) => getAbsolutePath(relPath));
  //   console.log(targetDirPaths);

  const targetDirsEnts = await Promise.all(
    targetDirPaths.map((dirPath) => getDirEnts(dirPath, 'recursive'))
  );
  console.log(targetDirsEnts);
};

main();
