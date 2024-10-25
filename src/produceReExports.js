import produceError from './produceError.js';
import filterPathname from './filterPathname.js';
import produceReExport from './produceReExport.js';
import produceReExportsPaths from './produceReExportsPaths.js';
import errorCathingDecor from './errorCathingDecor.js';

const produceReExports = async (srcPathname, reExportsDirPath) => {
  const pathnames = await produceReExportsPaths(srcPathname, reExportsDirPath);

  const isAnyPathname = !!pathnames.length;

  if (!isAnyPathname) throw produceError('!isAnyPathname');

  const filteredPathnames = pathnames.filter((pathname) => filterPathname(pathname, reExportsDirPath));

  return filteredPathnames.map((pathname) => produceReExport(pathname, reExportsDirPath));
};

export default errorCathingDecor(produceReExports);
