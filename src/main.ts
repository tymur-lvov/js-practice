import { getConfigOption, createIndexFiles } from '@helpers';

const main = () => {
  const targetDirPaths = getConfigOption('targetDirPaths');

  const indexFiles = createIndexFiles(targetDirPaths);
};

main();
