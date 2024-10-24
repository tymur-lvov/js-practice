import createError from './createError.js';
import validatePathname from './validatePathname.js';
import generateReExport from './generateReExport.js';
import generatePathnames from './generatePathnames.js';
import errorCathingDecor from './errorCathingDecor.js';

const generateReExports = async (srcPathname, reExportsFileDir) => {
  const pathnames = await generatePathnames(srcPathname, reExportsFileDir);

  const isAnyPathname = !!pathnames.length;

  if (!isAnyPathname) throw createError('!isAnyPathname');

  const filteredPathnames = pathnames.filter((pathname) => validatePathname(pathname, reExportsFileDir));

  const generatedReExports = filteredPathnames.map((pathname) => generateReExport(pathname, reExportsFileDir));

  return generatedReExports;
};

export default errorCathingDecor(generateReExports);
