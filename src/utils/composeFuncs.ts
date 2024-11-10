import { IFunc } from '@types';

const composeFuncs = <T extends any[], R>(...constituentFuncs: T): IFunc => {
  return (...args: T): R => {
    return constituentFuncs.reduce((funcResult, currentFunc) => currentFunc(funcResult), args);
  };
};

export default composeFuncs;
