import generateCustomTypeExport from './generateCustomTypeExport.js';

const generateCustomTypeDeclaration = (reExports, relativeDir) => {
  if (relativeDir === 'components') {
    return `
        declare module "@components" {
          import { FunctionComponent } from "react";
          ${reExports
            .map(({ variableName }) => {
              return generateCustomTypeExport(variableName, relativeDir);
            })
            .join('\n')
            .trim()}
        }`;
  } else {
    return `
        declare module "@images" {
          ${reExports
            .map(({ variableName }) => {
              return generateCustomTypeExport(variableName, relativeDir);
            })
            .join('\n')
            .trim()}
        }`;
  }
};

export default generateCustomTypeDeclaration;
