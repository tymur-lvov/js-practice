import produceTypeExport from './produceTypeExport.js';

const produceTypeDeclaration = (reExports, reExportsDirPath) => {
  switch (reExportsDirPath) {
    case 'components': {
      return `
        declare module '@components' {
          import { FunctionComponent } from 'react';
          ${reExports
            .map(({ variableName }) => {
              return produceTypeExport(variableName, reExportsDirPath);
            })
            .join('\n')
            .trim()}
        }`;
    }
    case 'utils': {
      return `
      declare module '@utils' {
        ${reExports
          .map(({ variableName }) => {
            return produceTypeExport(variableName, reExportsDirPath);
          })
          .join('\n')
          .trim()}
      }`;
    }
    case 'images': {
      return `
      declare module '@images' {
        ${reExports
          .map(({ variableName }) => {
            return produceTypeExport(variableName, reExportsDirPath);
          })
          .join('\n')
          .trim()}
      }`;
    }
    case 'icons': {
      return `
      declare module '@icons' {
        ${reExports
          .map(({ variableName }) => {
            return produceTypeExport(variableName, reExportsDirPath);
          })
          .join('\n')
          .trim()}
      }`;
    }
    default: {
      return null;
    }
  }
};

export default produceTypeDeclaration;
