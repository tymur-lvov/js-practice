const createComposer =
  (mode) =>
  (...funcs) =>
  (arg) => {
    switch (mode) {
      case 'sync': {
        return funcs.reduce((res, func) => func(res), arg);
      }

      case 'async': {
        return funcs.reduce(async (res, func) => func(await res), Promise.resolve(arg));
      }
    }
  };

export const compose = createComposer('sync');
export const asyncCompose = createComposer('async');
