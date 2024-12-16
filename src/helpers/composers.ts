export const compose =
  (...funcs) =>
  (arg) => {
    return funcs.reduce((res, func) => func(res), arg);
  };

export const asyncCompose =
  (...funcs) =>
  async (arg) => {
    return funcs.reduce(async (res, func) => func(await res), Promise.resolve(arg));
  };
