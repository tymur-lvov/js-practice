import * as fs from 'fs/promises';

import { getEntityPath } from '@utils';

import { Dirent } from 'fs';

const markExportedFile = async (file: Dirent): Promise<Dirent | string> => {
  const filePath = getEntityPath(file);

  const fileContent = await fs.readFile(filePath, { encoding: 'utf-8' });

  const isExportFile = fileContent.includes('export default') || fileContent.includes('export');

  return isExportFile ? file : 'markedForFilter';
};

export default markExportedFile;
