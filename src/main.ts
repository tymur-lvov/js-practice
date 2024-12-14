import config from './config.json';
import { processIndexFile } from './processors/processIndexFile';

const main = async () => {
  const { parentPaths } = config;

  console.log(await Promise.all(parentPaths.map(processIndexFile)));
};

main();
