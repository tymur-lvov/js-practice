import {
  assignFilePaths,
  assignFilesData,
  filterFiles,
  filterFilesToInclude,
  filterModules,
  getDirItems,
} from '@helpers';

import type { ProcessTargetFilesType } from '@types';

export const processTargetFiles: ProcessTargetFilesType = async (dirPath) => {
  const dirItems = await getDirItems(dirPath);

  const files = filterFiles(dirItems);

  const filesWithPaths = assignFilePaths(files);

  const filesToInclude = filterFilesToInclude(filesWithPaths);

  const filesWithData = await assignFilesData(filesToInclude);

  return filterModules(filesWithData);
};
