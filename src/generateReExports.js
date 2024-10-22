import errorHandleDecor from './errorHandleDecor.js';
import generatePathnames from './generatePathnames.js';
import insertErrorMessage from './insertErrorMessage.js';
import generateVariableName from './generateVariableName.js';
import convertToRelativePath from './convertToRelativePath.js';

const generateReExports = async (rootPath, relativeDir) => {
  const pathnames = await generatePathnames(rootPath, relativeDir);

  if (!pathnames.length) {
    throw new Error(insertErrorMessage('!pathnames.length'));
  }

  const filteredPathnames = pathnames.filter((pathname) => {
    return (
      pathname.includes(relativeDir) &&
      !pathname.includes('generateBarrelFile') &&
      !pathname.includes('.DS_Store')
    );
  });

  return filteredPathnames.map((pathname) => {
    const reExport = {};

    reExport.relativePath = convertToRelativePath(pathname, relativeDir);
    reExport.variableName = generateVariableName(pathname, relativeDir);

    return reExport;
  });
};

export default errorHandleDecor(generateReExports);
