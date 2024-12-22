import { getParentPaths } from './helpers/misc';
import { processIndexFiles } from './processors';

const main = async () => {
  const parentPaths = getParentPaths();

  const indexFiles = await processIndexFiles(parentPaths);
};

main();
