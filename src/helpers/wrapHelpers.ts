const composeWrap = (...funcs: any[]): any => {
  return (arg: any): any => {
    return funcs.reduce((result, func) => {
      return func(result);
    }, arg);
  };
};

const composeWrapAsync = (...funcs: any[]): any => {
  return async (arg: any): Promise<any> => {
    let result = await arg;

    for (const func of funcs) {
      result = await func(result);
    }

    return result;
  };
};
