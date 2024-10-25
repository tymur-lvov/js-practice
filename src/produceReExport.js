import produceVariableName from './produceVariableName.js';
import convertToRelativePathname from './convertToRelativePathname.js';

const produceReExport = (pathname, sourceFilePath) => {
  return {
    relativePathname: convertToRelativePathname(pathname, sourceFilePath),

    variableName: produceVariableName(pathname),
  };
};

export default produceReExport;
