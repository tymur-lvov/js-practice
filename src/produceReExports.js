import produceError from './produceError.js';
import filterPathname from './filterPathname.js';
import produceReExport from './produceReExport.js';
import produceReExportsPaths from './produceReExportsPaths.js';
import errorCathingDecor from './errorCathingDecor.js';

const produceReExports = async (reExportsDirPath) => {
  const reExportsPaths = await produceReExportsPaths(reExportsDirPath);

  //const isAnyPathname = !!reExportsPaths.length;

  //if (!isAnyPathname) throw produceError('!isAnyPathname');

  //const filteredPathnames = reExportsPaths.filter((pathname) => filterPathname(pathname, reExportsDirPath));

  //return filteredPathnames.map((pathname) => produceReExport(pathname, reExportsDirPath));
};

export default errorCathingDecor(produceReExports);
