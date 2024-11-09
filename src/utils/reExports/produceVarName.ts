import { produceTypeVarName, replaceInvalidSymbols } from '@utils';

const produceVarName = (basename: string): string => {
  const varName = replaceInvalidSymbols(basename);

  return basename.includes('.types') ? produceTypeVarName(varName) : varName;
};

export default produceVarName;
