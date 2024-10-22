import convertToCamelCase from './convertToCamelCase.js';

const generateVariableName = (path, relativeDir) => {
  const slashIndex = path.lastIndexOf('/');
  const dotIndex = path.lastIndexOf('.');

  const basename = path.slice(slashIndex + 1, dotIndex);

  if (relativeDir === 'images') {
    return convertToCamelCase(basename, relativeDir);
  }

  return basename;
};

export default generateVariableName;
