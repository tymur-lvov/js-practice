import getPathnames from './getPathnames.js';
import generateVariableName from './generateVariableName.js';
import convertToRelativePath from './convertToRelativePath.js';

const generateReExports = async (relativeDirName) => {
  const pathnames = await getPathnames();

  const reExports = pathnames.map((pathname) => {
    const reExport = {};

    reExport.relativePath = convertToRelativePath(pathname, relativeDirName);

    reExport.variableName = generateVariableName(pathname);

    return reExport;
  });

  return reExports;
};

export default generateReExports;
