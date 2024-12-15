const composeCreator = () => {
  const compose =
    (...funcs) =>
    (arg) => {
      return funcs.reduce((res, func) => func(res), arg);
    };

  const asyncCompose =
    (...funcs) =>
    (arg) => {
      return funcs.reduce(async (res, func) => func(await res), Promise.resolve(arg));
    };

  return { compose, asyncCompose };
};

export const { compose, asyncCompose } = composeCreator();
