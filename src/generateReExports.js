import createError from './createError.js';
import validatePath from './validatePath.js';
import generatePaths from './generatePaths.js';
import createReExport from './createReExport.js';
import errorCathingDecor from './errorCathingDecor.js';

const generateReExports = async (srcPath, relativeDir) => {
  const paths = await generatePaths(srcPath, relativeDir);

  if (!paths.length) {
    throw createError('!paths.length');
  }

  const filteredPaths = paths.filter((path) => validatePath(path, relativeDir));

  return filteredPaths.map((path) => createReExport(path, relativeDir));
};

export default errorCathingDecor(generateReExports);
