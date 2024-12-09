import { targetDirPaths } from './helpers/constants';
import { createIndexFile } from './helpers/creators';

const main = async () => {
  const indexFiles = await Promise.all(targetDirPaths.map(createIndexFile));
};

main();
