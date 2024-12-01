import { getTargetDirPaths } from '@helpers';
import { createReExportFiles } from '@builders';

const main = () => {
  const targetDirPaths = getTargetDirPaths();

  const reExportFiles = createReExportFiles(targetDirPaths);
};

main();
