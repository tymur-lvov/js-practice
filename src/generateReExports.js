import errorCathingDecor from './errorCathingDecor.js';
import generatePathnames from './generatePathnames.js';
import produceErrorMessage from './produceErrorMessage.js';
import generateVariableName from './generateVariableName.js';
import convertToRelativePath from './convertToRelativePath.js';

const generateReExports = async (srcPath, relativeDir) => {
  const pathnames = await generatePathnames(srcPath, relativeDir);

  if (!pathnames.length) {
    throw new Error(produceErrorMessage('!pathnames.length'));
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

export default errorCathingDecor(generateReExports);
