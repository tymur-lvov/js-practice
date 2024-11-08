import * as path from 'path';

import { normalizeVarName } from '@scripts';

const getVariableNames = (filePaths: string[]): string[] => {
  return filePaths.map((filePath) => {
    const varName = path.basename(filePath);

    return normalizeVarName(varName);
  });
};

export default getVariableNames;
