import { compose, getBasenameWithoutExt, isFileExportTypes } from '@helpers';

export const sterelizeBasename = (basename: string): string => {
  return basename.replace(/[^a-zA-Z0-9_$]/g, '_');
};

export const slicePostfix = (varName: string): string => {
  //   console.log(compose(findLastIndexOf, sliceBeforeEl)(varName)('_'));

  return varName.slice(0, varName.lastIndexOf('_'));
};

export const capitalize = (varName: string): string => {
  return varName.replace(varName.charAt(0), varName.charAt(0).toUpperCase());
};

export const addInterfaceAbbrPrefix = (varName: string): string => {
  return `I${varName}`;
};

export const getExtension = (filePath: string): string => {
  return filePath.slice(filePath.lastIndexOf('.'));
};

export const getTypeVarName = (varName: string): string => {
  return compose(slicePostfix, capitalize, addInterfaceAbbrPrefix)(varName);
};

export const getVarName = (filePath: string): string => {
  const varName = compose(getBasenameWithoutExt, sterelizeBasename)(filePath);

  return isFileExportTypes(filePath) ? getTypeVarName(varName) : varName;
};

const findIndexOfElCreator =
  (mode: 'firstIndex' | 'lastIndex') => (string: string) => (subString: string) => {
    return mode === 'firstIndex' ? string.indexOf(subString) : string.lastIndexOf(subString);
  };

const sliceCreator = (mode: 'before' | 'after') => (string: string) => (index: number) => {
  return mode === 'before' ? string.slice(0, index) : string.slice(index);
};

export const findIndexOf = findIndexOfElCreator('firstIndex');
export const findLastIndexOf = findIndexOfElCreator('lastIndex');

export const sliceBeforeEl = sliceCreator('before');
export const sliceAfterEl = sliceCreator('after');
