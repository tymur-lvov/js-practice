import produceVariableName from './produceVariableName.js';
import convertToRelativePathname from './convertToRelativePathname.js';

const produceReExport = (pathname, srcFileDirPath) => {
  return {
    relativePathname: convertToRelativePathname(pathname, srcFileDirPath),

    variableName: produceVariableName(pathname),
  };
};

export default produceReExport;
