import convertToCamelCase from './convertToCamelCase.js';

const generateVariableName = (pathname, relativeDir) => {
  const slashIndex = pathname.lastIndexOf('/');

  const dotIndex = pathname.lastIndexOf('.');

  const basename = pathname.slice(slashIndex + 1, dotIndex);

  if (relativeDir === 'images') {
    return convertToCamelCase(basename, relativeDir);
  }

  return basename;
};

export default generateVariableName;
