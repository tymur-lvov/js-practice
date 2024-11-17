//Refactored
import { composeFuncs } from '@utils';

const slicePostfix = (varName: string): string => {
  const underscoreIndex = varName.indexOf('_');

  return varName.slice(0, underscoreIndex);
};

const capitalize = (varName: string): string => {
  const firstCapitalLetter = varName.charAt(0).toUpperCase();

  return firstCapitalLetter + varName.slice(1);
};

const concatInterfaceAbbr = (varName: string): string => {
  return 'I' + varName;
};

const transformToTypeVarName = (varName: string): string => {
  const processFunc = composeFuncs(slicePostfix, capitalize, concatInterfaceAbbr);

  return processFunc(varName);
};

export default transformToTypeVarName;
