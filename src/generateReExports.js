import createError from './createError.js';
import validatePath from './validatePath.js';
import generatePaths from './generatePaths.js';
import errorCathingDecor from './errorCathingDecor.js';
import generateVariableName from './generateVariableName.js';
import convertToRelativePath from './convertToRelativePath.js';

const generateReExports = async (srcPath, relativeDir) => {
  const paths = await generatePaths(srcPath, relativeDir); // To be done ...

  if (!paths.length) {
    throw createError('!paths.length');
  }

  const filteredPaths = paths.filter((path) => validatePath(path, relativeDir)); // Refactoring ...

  return filteredPaths.map((path) => {
    const reExport = {};

    reExport.relativePath = convertToRelativePath(path, relativeDir);
    reExport.variableName = generateVariableName(path, relativeDir);

    return reExport;
  });
};

export default errorCathingDecor(generateReExports);
