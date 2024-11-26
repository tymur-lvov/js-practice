import type { IComposer, IFunc } from '@types';

const createComposer =
  (mode: 'async' | 'sync'): IComposer =>
  (...funcs: IFunc[]): IFunc =>
  (arg: any): Promise<any> | any => {
    if (mode === 'async') {
      return funcs.reduce(async (result, func) => func(await result), arg);
    } else {
      return funcs.reduce((result, func) => func(result), arg);
    }
  };

export const compose = createComposer('sync');
export const asyncCompose = createComposer('async');
