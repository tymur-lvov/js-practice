import { targetDirPaths } from './helpers/constants';
import { processIndexFile } from './helpers/processors';

const main = async () => {
  const indexFiles = await Promise.all(targetDirPaths.map(processIndexFile));
  console.log(indexFiles);
};

main();
