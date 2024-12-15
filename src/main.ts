import config from './config.json';
import { processIndexFiles } from './processors/processIndexFiles';

const main = async () => {
  const { parentPaths } = config;

  const indexFiles = await processIndexFiles(parentPaths);

  console.log(indexFiles);
};

main();
