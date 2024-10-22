import createError from './createError.js';
import generatePaths from './generatePaths.js';
import errorCathingDecor from './errorCathingDecor.js';
import checkForConditions from './checkForConditions.js';
import generateVariableName from './generateVariableName.js';
import convertToRelativePath from './convertToRelativePath.js';

const generateReExports = async (srcPath, relativeDir) => {
  const paths = await generatePaths(srcPath, relativeDir); // To be done ...

  if (!paths.length) {
    throw createError('!paths.length');
  }

  const filteredPaths = paths.filter((path) => checkForConditions(path)); // Refactoring ...

  return filteredPaths.map((path) => {
    const reExport = {};

    reExport.relativePath = convertToRelativePath(path, relativeDir);
    reExport.variableName = generateVariableName(path, relativeDir);

    return reExport;
  });
};

export default errorCathingDecor(generateReExports);
