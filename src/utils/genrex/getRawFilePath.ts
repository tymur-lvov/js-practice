import * as fs from 'fs/promises';

import { Dirent } from 'fs';

import genrexConfig from '@config';

import { decorAsyncFunc, getEntityPath } from '@utils';

const getRawFilePath = async (dirEntity: Dirent): Promise<string | undefined> => {
  const isEntityFile = dirEntity.isFile();

  if (!isEntityFile) return;

  const excludedFiles = new Set(genrexConfig.excludedFiles);

  const isEntityExcluded = excludedFiles.has(dirEntity.name);

  if (isEntityExcluded) return;

  const filePath = getEntityPath(dirEntity);

  const isEntityModule = /\.(ts|js)$/.test(dirEntity.name);

  if (!isEntityModule) return filePath;

  const fileContent = await fs.readFile(filePath, 'utf-8');

  const isFileForExport = /(export default|export)/.test(fileContent);

  if (isFileForExport) return filePath;
};

export default decorAsyncFunc(getRawFilePath);
