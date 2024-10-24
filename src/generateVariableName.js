import convertToCamelCase from './convertToCamelCase.js';

const generateVariableName = (pathname, reExportsFileDir) => {
  const slashIndex = pathname.lastIndexOf('/');

  const dotIndex = pathname.lastIndexOf('.');

  const basename = pathname.slice(slashIndex + 1, dotIndex);

  if (reExportsFileDir === 'images') {
    return convertToCamelCase(basename, reExportsFileDir);
  }

  return basename;
};

export default generateVariableName;
