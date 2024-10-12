import convertToCamelCase from './convertToCamelCase.js';

const generateVariableName = (pathname) => {
  const slashIndex = pathname.lastIndexOf('/');
  const dotIndex = pathname.lastIndexOf('.');

  const basename = pathname.slice(slashIndex + 1, dotIndex);

  const variableName = convertToCamelCase(basename);

  return variableName;
};

export default generateVariableName;
