import { getTargetDirPaths, createIndexFiles } from '@helpers';

const main = () => {
  const targetDirPaths = getTargetDirPaths();

  const indexFiles = createIndexFiles(targetDirPaths);
};

main();
