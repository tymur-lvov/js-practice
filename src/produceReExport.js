import produceVariableName from './produceVariableName.js';
import convertToRelativePathname from './convertToRelativePathname.js';

const produceReExport = (pathname, reExportsDirPath) => {
  return {
    relativePathname: convertToRelativePathname(pathname, reExportsDirPath),

    variableName: produceVariableName(pathname),
  };
};

export default produceReExport;
