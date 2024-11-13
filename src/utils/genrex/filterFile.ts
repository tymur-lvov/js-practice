import { Dirent } from 'fs';

import genrexConfig from '@config';

const filterFile = (entity: Dirent): entity is Dirent => {
  const { excludedFiles: excludedFilesArray } = genrexConfig;

  const excludedFiles = new Set(excludedFilesArray);

  const isEntityFile = entity.isFile();

  const isEntityExcluded = excludedFiles.has(entity.name);

  return isEntityFile && !isEntityExcluded ? true : false;
};

export default filterFile;
