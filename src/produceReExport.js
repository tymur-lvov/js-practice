import produceVariableName from './produceVariableName.js';
import convertToRelativePathname from './convertToRelativePathname.js';

const produceReExport = (pathname, sourceFileDirPath) => {
  return {
    relativePathname: convertToRelativePathname(pathname, sourceFileDirPath),

    variableName: produceVariableName(pathname),
  };
};

export default produceReExport;
