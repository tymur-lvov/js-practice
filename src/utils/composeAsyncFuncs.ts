const composeAsyncFuncs = (...constituentFuncs: any[]): any => {
  return async (arg: any): Promise<any> => {
    let prevResult = arg;

    for (const currentFunc of constituentFuncs) {
      prevResult = await currentFunc(prevResult);
    }

    return prevResult;
  };
};

export default composeAsyncFuncs;
