import type { IFunc, IDecorator } from '@types';

const mapDecorCreator =
  (mode: 'async' | 'sync'): IDecorator =>
  (func: IFunc): IFunc => {
    const funcRecurs = (arg: any): any => {
      if (!Array.isArray(arg)) {
        return func(arg);
      } else {
        return mode === 'async' ? Promise.all(arg.map(funcRecurs)) : arg.map(funcRecurs);
      }
    };
    return funcRecurs;
  };

export const mapDecor = mapDecorCreator('sync');
export const asyncMapDecor = mapDecorCreator('async');
