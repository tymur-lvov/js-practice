export const compose = (...funcs: ((arg: any) => any)[]) => {
  return (arg: any): any => {
    return funcs.reduce((result, func) => {
      return func(result);
    }, arg);
  };
};

export const asyncCompose = (...funcs: ((arg: any) => any)[]) => {
  return async (arg: any | Promise<any>): Promise<any> => {
    let result = await arg;

    for (const func of funcs) {
      result = await func(result);
    }

    return result;
  };
};
