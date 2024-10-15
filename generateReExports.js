import getPathnames from './getPathnames.js';
import generateVariableName from './generateVariableName.js';
import convertToRelativePath from './convertToRelativePath.js';

const generateReExports = async (relativeDir) => {
  const pathnames = await getPathnames();

  const reExports = pathnames.map((pathname) => {
    const reExport = {};

    reExport.relativePath = convertToRelativePath(pathname, relativeDir);

    reExport.variableName = generateVariableName(pathname);

    return reExport;
  });

  return reExports;
};

export default generateReExports;
