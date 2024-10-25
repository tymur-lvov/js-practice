import * as path from 'path';

const produceVariableNames = (filePaths) => {
  const removeExtension = (basename) => basename.replace(/\.[^./]+$/, '');

  const removeInvalidSymbols = (basename) => basename.replace(/[^a-zA-Z0-9_$]/g, '');

  const composeFunctions = (fnA, fnB) => (argA) => fnB(fnA(argA));

  const normalizeBasename = composeFunctions(removeExtension, removeInvalidSymbols);

  return filePaths.map((filePath) => {
    const basename = path.basename(filePath);

    return normalizeBasename(basename);
  });
};

export default produceVariableNames;
