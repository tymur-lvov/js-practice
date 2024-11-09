import * as path from 'path';

import { produceVarName } from '@scripts';

const getVariableNames = (filePaths: string[]): string[] => {
  return filePaths.map((filePath) => {
    const basename = path.basename(filePath);

    return produceVarName(basename);
  });
};

export default getVariableNames;
