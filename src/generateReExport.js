import generateVariableName from './generateVariableName.js';
import convertToRelativePathname from './convertToRelativePathname.js';

const generateReExport = (pathname, reExportsFileDir) => {
  return {
    relativePathname: convertToRelativePathname(pathname, reExportsFileDir),

    variableName: generateVariableName(pathname),
  };
};

export default generateReExport;
