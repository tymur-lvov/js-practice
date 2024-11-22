export const mapDecor = (initFunc: any, async: any = false) => {
  return function executeFunc(arg: any): any {
    if (Array.isArray(arg)) {
      return async ? Promise.all(arg.map(executeFunc)) : arg.map(executeFunc);
    } else {
      return initFunc(arg);
    }
  };
};

export const composeFuncs = (async: any = false, ...initFuncs: any) => {
  return (arg: any): any => {
    if (async) {
      return (async () => {
        let prevResult = arg;

        for (const initFunc of initFuncs) {
          prevResult = await initFunc(prevResult);
        }

        return prevResult;
      })();
    } else {
      return initFuncs.reduce((prevResult: any, currentFunc: any) => {
        return currentFunc(prevResult);
      }, arg);
    }
  };
};
