export const composeWrap = (...funcs: ((arg: any) => any)[]): ((arg: any) => any) => {
  return (arg) => {
    return funcs.reduce((result, func) => {
      return func(result);
    }, arg);
  };
};

export const composeWrapAsync = (...funcs: ((arg: any) => any)[]): ((arg: any) => Promise<any>) => {
  return async (arg) => {
    let result = await arg;

    for (const func of funcs) {
      result = await func(result);
    }

    return result;
  };
};
