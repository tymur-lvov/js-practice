const generateCustomTypeExport = (variableName, relativeDir) => {
  if (relativeDir === 'components') {
    return `export const ${variableName}: FunctionComponent<any>;`;
  } else {
    return `export const ${variableName}: string;`;
  }
};

export default generateCustomTypeExport;
