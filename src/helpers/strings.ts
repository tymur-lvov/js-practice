import { compose, getBasenameWithoutExt, isFileExportTypes } from '@helpers';

const sliceSubStringCreator = (mode) => (string, startSubString) => {
  const startSubStringIndex = findIndexOfSubString(string, startSubString);

  switch (mode) {
    case 'sliceBefore': {
      return string.slice(0, startSubStringIndex);
    }
    case 'sliceAfter': {
      return string.slice(startSubStringIndex);
    }
  }
};

export const sliceBeforeSubString = sliceSubStringCreator('sliceBefore');
export const sliceAfterSubString = sliceSubStringCreator('sliceAfter');

const findIndexOfSubStringCreator = (mode) => (string, subString) => {
  switch (mode) {
    case 'findIndexOfFirst': {
      return string.indexOf(subString);
    }
    case 'findIndexOfLast': {
      return string.lastIndexOf(subString);
    }
  }
};

export const findIndexOfSubString = findIndexOfSubStringCreator('findIndexOfFirst');
export const findIndexOfLastSubString = findIndexOfSubStringCreator('findIndexOfLast');

export const replaceSubString = (string, subString, replacer) => {
  return string.replace(subString, replacer);
};

export const sterilizeString = (string) => {
  return replaceSubString(string, /[^a-zA-Z0-9_$]/g, '');
};

export const upperCaseString = (string) => {
  return string.toUpperCase();
};

export const findCharAtIndex = (string, index) => {
  return string.charAt(index);
};

export const capitalizeString = (string) => {
  const firstChar = findCharAtIndex(string, 0);
  const upperCasedChar = upperCaseString(firstChar);

  return replaceSubString(string, firstChar, upperCasedChar);
};

const insertSubStringCreator = (mode) => (string, subString) => {
  switch (mode) {
    case 'insertAtStart': {
      return subString + string;
    }
    case 'insertAtEnd': {
      return string + subString;
    }
  }
};

export const insertSubStringAtStart = insertSubStringCreator('insertAtStart');
export const insertSubStringAtEnd = insertSubStringCreator('insertAtEnd');

// Refactoring...

export const getTypeVarName = (varName: string): string => {
  const croppedVarName = sliceBeforeSubString(varName, 'types');
  const capitalizedVarName = capitalizeString(croppedVarName);

  return insertSubStringAtStart(capitalizedVarName, 'I');
};

export const getVarName = (filePath: string): string => {
  const varName = compose(getBasenameWithoutExt, sterilizeString)(filePath);

  return isFileExportTypes(filePath) ? getTypeVarName(varName) : varName;
};

export const getExtension = (filePath: string): string => {
  return filePath.slice(filePath.lastIndexOf('.'));
};
