import { Dirent } from 'fs';

import { getRawFilePath } from '@utils';

const extractFilePaths = async (dirEntities: Dirent[]): Promise<string[]> => {
  const rawFilePaths = await Promise.all(dirEntities.map(getRawFilePath));

  return rawFilePaths.filter(Boolean) as string[];
};

export default extractFilePaths;
