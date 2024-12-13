import config from '@config';
import { processIndexFile } from './processors/processIndexFile';

const main = async () => {
  const { targetDirPaths } = config;

  targetDirPaths.map((dirPath) => processIndexFile({ dirPath }));
};

main();
