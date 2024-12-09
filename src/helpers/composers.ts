const composeCreator = {
  sync:
    (...funcs) =>
    (arg) => {
      return funcs.reduce((res, func) => func(res), arg);
    },

  async:
    (...funcs) =>
    (arg) => {
      return funcs.reduce(async (res, func) => func(await res), Promise.resolve(arg));
    },
};

export const compose = composeCreator['sync'];
export const asyncCompose = composeCreator['async'];
