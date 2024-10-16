import filterPathnames from './filterPathnames.js';
import generatePathnames from './generatePathnames.js';
import generateVariableName from './generateVariableName.js';
import convertToRelativePath from './convertToRelativePath.js';

const generateReExports = async (rootPath, relativeDir) => {
  const pathnames = await generatePathnames(rootPath, relativeDir);
  const filteredPathnames = filterPathnames(pathnames, relativeDir);

  return filteredPathnames.map((pathname) => {
    const reExport = {};

    reExport.relativePath = convertToRelativePath(pathname, relativeDir);
    reExport.variableName = generateVariableName(pathname, relativeDir);

    return reExport;
  });
};

export default generateReExports;
