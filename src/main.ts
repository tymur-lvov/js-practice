import { getConfigProperty, getDirEntities, transformPathToAbsolute } from '@helpers';

const main = async () => {
  const targetDirRelativePaths = getConfigProperty('targetDirPaths');
  //   console.log(targetDirPaths);

  const targetDirPaths = targetDirRelativePaths.map(transformPathToAbsolute);
  //   console.log(targetDirPaths);

  const targetDirsEntities = await Promise.all(
    targetDirPaths.map((path) => getDirEntities(path, 'recursive'))
  );
  console.log(targetDirsEntities);
};

main();
