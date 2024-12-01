import { getConfigOption } from '@helpers';
import { createReExportFiles } from '@builders';

const main = () => {
  const targetDirPaths = getConfigOption('targetDirPaths');
  const reExportFiles = createReExportFiles(targetDirPaths);
};

main();
