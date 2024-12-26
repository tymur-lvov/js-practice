import { writeIndexFiles } from './helpers/files';
import { getParentPaths } from './helpers/misc';
import { processIndexFiles } from './processors';

const main = async () => {
  const parentPaths = getParentPaths();

  const indexFiles = await processIndexFiles(parentPaths);
  console.log(indexFiles);

  writeIndexFiles(indexFiles);
};

main();
