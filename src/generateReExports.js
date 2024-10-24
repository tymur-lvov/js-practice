import createError from './createError.js';
import createReExport from './createReExport.js';
import validatePathname from './validatePathname.js';
import generatePathnames from './generatePathnames.js';
import errorCathingDecor from './errorCathingDecor.js';

const generateReExports = async (srcPathname, relativeDir) => {
  const pathnames = await generatePathnames(srcPathname, relativeDir);

  if (!pathnames.length) {
    throw createError('!pathnames.length');
  }

  const filteredPathnames = pathnames.filter((pathname) => {
    return validatePathname(pathname, relativeDir);
  });

  return filteredPathnames.map((pathname) => {
    return createReExport(pathname, relativeDir);
  });
};

export default errorCathingDecor(generateReExports);
