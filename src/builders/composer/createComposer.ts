const composerMode = {
  syncCompose(...funcs) {
    return (arg) => {
      return funcs.reduce((res, func) => func(res), arg);
    };
  },
  asyncCompose(...funcs) {
    return (arg) => {
      return funcs.reduce(async (resPromise, func) => func(await resPromise), Promise.resolve(arg));
    };
  },
};

export const createComposer = (mode: 'syncCompose' | 'asyncCompose') => composerMode[mode];
