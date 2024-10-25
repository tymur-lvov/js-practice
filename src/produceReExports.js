import produceError from './produceError.js';
import filterPathname from './filterPathname.js';
import produceReExport from './produceReExport.js';
import produceFilePaths from './produceFilePaths.js';
import errorCathingDecor from './errorCathingDecor.js';

const produceReExports = async (srcFileDirPath) => {
  const filePaths = await produceFilePaths(srcFileDirPath);
  console.log(filePaths);

  //const variableNames = await produceReExports(srcFileDirPath);

  //const isAnyPathname = !!reExportsPaths.length;

  //if (!isAnyPathname) throw produceError('!isAnyPathname');

  //const filteredPathnames = reExportsPaths.filter((pathname) => filterPathname(pathname, srcFileDirPath));

  //return filteredPathnames.map((pathname) => produceReExport(pathname, srcFileDirPath));
};

export default errorCathingDecor(produceReExports);
