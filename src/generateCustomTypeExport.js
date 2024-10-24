const generateCustomTypeExport = (variableName, reExportsFileDir) => {
  switch (reExportsFileDir) {
    case 'components': {
      return `export const ${variableName}: FunctionComponent<any>;`;
    }
    case 'utils': {
      return `export function ${variableName}(...args: any[]): any;`;
    }
    case 'images': {
      return `export const ${variableName}: string;`;
    }
    case 'icons': {
      return `export const ${variableName}: string;`;
    }
    default: {
      return null;
    }
  }
};

export default generateCustomTypeExport;
