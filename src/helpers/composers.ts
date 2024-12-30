import type { IAsyncCompose, ICompose } from '../../@types/helpers.types';

export const compose: ICompose =
  (...funcs) =>
  (arg) => {
    return funcs.reduce((res, func) => func(res), arg);
  };

export const asyncCompose: IAsyncCompose =
  (...funcs) =>
  async (arg) => {
    return funcs.reduce(async (res, func) => func(await res), Promise.resolve(arg));
  };
