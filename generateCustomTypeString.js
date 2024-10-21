const generateCustomTypeString = (varName, relativeDir) => {
  if (relativeDir === 'components') {
    return `
    declare module "@components" {
      import { FunctionComponent } from "react";
      export const ${varName}: FunctionComponent<any>;
    }`;
  } else {
    return `
    declare module "@images" {
      export const ${varName}: string;
    }`;
  }
};

export default generateCustomTypeString;
