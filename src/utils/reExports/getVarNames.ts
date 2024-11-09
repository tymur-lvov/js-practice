import * as path from 'path';

import { produceTypeVarName, replaceInvalidSymbols } from '@utils';

const getVarNames = (filePaths: string[]): string[] => {
  return filePaths.map((filePath) => {
    const basename = path.basename(filePath);

    const varName = replaceInvalidSymbols(basename);

    return basename.includes('.types') ? produceTypeVarName(varName) : varName;
  });
};

export default getVarNames;
