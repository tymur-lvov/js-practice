import path from 'path';

import normalizeBasename from './normalizeBasename.js';

const produceVariableNames = (filePaths) => {
  return filePaths.map((filePath) => {
    const basename = path.basename(filePath);

    return normalizeBasename(basename);
  });
};

export default produceVariableNames;
