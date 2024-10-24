import createError from './createError.js';
import filterPathname from './filterPathname.js';
import generateReExport from './generateReExport.js';
import generatePathnames from './generatePathnames.js';
import errorCathingDecor from './errorCathingDecor.js';

const generateReExports = async (srcPathname, reExportsFileDir) => {
  const pathnames = await generatePathnames(srcPathname, reExportsFileDir);

  const isAnyPathname = !!pathnames.length;

  if (!isAnyPathname) throw createError('!isAnyPathname');

  const filteredPathnames = pathnames.filter((pathname) => filterPathname(pathname, reExportsFileDir));

  return filteredPathnames.map((pathname) => generateReExport(pathname, reExportsFileDir)); //
};

export default errorCathingDecor(generateReExports);
