import { Dirent } from 'fs';

const filterExportedFile = (file: string | Dirent): file is Dirent => {
  const isExportedFile = file !== 'markedForFilter';

  return isExportedFile ? true : false;
};

export default filterExportedFile;
