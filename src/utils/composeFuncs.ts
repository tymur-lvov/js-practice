import { IFunc } from '@types';

const composeFuncs = <T extends any[], R>(...constituentFuncs: T): IFunc => {
  return (args: T): R => {
    return constituentFuncs.reduce((prevResult, currentFunc) => {
      return currentFunc(prevResult);
    }, args);
  };
};

export default composeFuncs;
