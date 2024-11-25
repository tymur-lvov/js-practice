import type { IFunc } from '@types';

export const mapDecor = (func: IFunc): IFunc => {
  const funcRecurs = (arg: any): any => {
    return !Array.isArray(arg) ? func(arg) : arg.map(funcRecurs);
  };

  return funcRecurs;
};
