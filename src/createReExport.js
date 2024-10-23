import generateVariableName from './generateVariableName.js';
import convertToRelativePathname from './convertToRelativePathname.js';

const createReExport = (pathname, relativeDir) => {
  return {
    relativePathname: convertToRelativePathname(pathname, relativeDir),

    variableName: generateVariableName(pathname, relativeDir),
  };
};

export default createReExport;
