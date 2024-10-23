import generateVariableName from './generateVariableName.js';
import convertToRelativePath from './convertToRelativePath.js';

const createReExport = (path, relativeDir) => {
  const reExport = {};

  reExport.relativePath = convertToRelativePath(path, relativeDir);
  reExport.variableName = generateVariableName(path, relativeDir);

  return reExport;
};

export default createReExport;
