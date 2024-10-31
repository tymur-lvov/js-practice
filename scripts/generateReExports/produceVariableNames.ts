import * as path from 'path';

import { normalizeBasename } from '@scripts';

const produceVariableNames = (filePaths: string[]): string[] => {
  return filePaths.map((filePath) => {
    const basename = path.basename(filePath);

    return normalizeBasename(basename);
  });
};

export default produceVariableNames;
