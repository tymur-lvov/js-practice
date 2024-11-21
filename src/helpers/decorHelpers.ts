export const mapDecor = (initFunc: any, async: any = false) => {
  return function executeFunc(arg: any): any {
    if (Array.isArray(arg)) {
      return async ? Promise.all(arg.map(executeFunc)) : arg.map(executeFunc);
    } else {
      return initFunc(arg);
    }
  };
};
