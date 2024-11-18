const composeFuncs = (...constituentFuncs: any[]): any => {
  return (arg: any): any => {
    return constituentFuncs.reduce((prevResult, currentFunc) => {
      return currentFunc(prevResult);
    }, arg);
  };
};

export default composeFuncs;
