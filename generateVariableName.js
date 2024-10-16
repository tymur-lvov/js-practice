import convertToCamelCase from './convertToCamelCase.js';

const generateVariableName = (pathname, relativeDir) => {
  const slashIndex = pathname.lastIndexOf('/');
  const dotIndex = pathname.lastIndexOf('.');

  const basename = pathname.slice(slashIndex + 1, dotIndex);

  if (relativeDir === 'components') {
    return basename;
  }

  return convertToCamelCase(basename, relativeDir);
};

export default generateVariableName;
