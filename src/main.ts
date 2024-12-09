import { getDirEnts } from './helpers/files';
import { targetDirPaths } from './helpers/constants';
import { processExportFiles } from './helpers/processors';

const main = async () => {
  const files = await Promise.all(targetDirPaths.map(getDirEnts));

  const exportFiles = await Promise.all(files.map(processExportFiles));
};

main();
