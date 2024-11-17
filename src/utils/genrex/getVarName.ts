//Refactored
import * as path from 'path';

import { transformToTypeVarName, composeFuncs } from '@utils';

const sanitizeBasename = (filePath: string): string => {
  const basename = path.basename(filePath);

  const invalidCharRegex = /[^a-zA-Z0-9_$]/g;

  return basename.replace(invalidCharRegex, '_');
};

const transformToVarName = (basename: string): string => {
  return basename.endsWith('_types') ? transformToTypeVarName(basename) : basename;
};

const getVarName = (filePath: string): string => {
  const processFunc = composeFuncs(sanitizeBasename, transformToVarName);

  return processFunc(filePath);
};

export default getVarName;
