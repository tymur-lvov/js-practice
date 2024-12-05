import { targetDirPaths } from '@constants';
import { createIndexFiles } from '@helpers';

const main = () => {
  const indexFiles = createIndexFiles(targetDirPaths);
};

main();
