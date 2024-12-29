import type { AsyncComposeType, ComposeType } from '../../@types/helpers.types';

export const compose: ComposeType =
  (...funcs) =>
  (arg) => {
    return funcs.reduce((res, func) => func(res), arg);
  };

export const asyncCompose: AsyncComposeType =
  (...funcs) =>
  async (arg) => {
    return funcs.reduce(async (res, func) => func(await res), Promise.resolve(arg));
  };
