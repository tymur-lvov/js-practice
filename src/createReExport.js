import generateVariableName from './generateVariableName.js';
import convertToRelativePath from './convertToRelativePath.js';

const createReExport = (path, relativeDir) => {
  return {
    relativePath: convertToRelativePath(path, relativeDir),

    variableName: generateVariableName(path, relativeDir),
  };
};

export default createReExport;
