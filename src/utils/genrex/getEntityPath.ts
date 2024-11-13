import path from 'path';

import { Dirent } from 'fs';

const getEntityPath = ({ parentPath, name }: Dirent): string => {
  return path.resolve(parentPath, name);
};

export default getEntityPath;
