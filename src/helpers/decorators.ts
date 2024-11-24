export const mapDecor = (...args: any[]): any => {
  const isAsync = args[0] === 'async';
  const isFirstCall = args.length === 1;

  if (isAsync && isFirstCall) {
    return mapDecor.bind(null, 'async');
  }

  const funcs = args.slice(1);

  const [func] = funcs;

  const funcRecurs = (arg: any): any => {
    if (!Array.isArray(arg)) {
      return func(arg);
    }

    return isAsync ? Promise.all(arg.map(funcRecurs)) : arg.map(funcRecurs);
  };

  return funcs.length === 1 ? funcRecurs : funcs.map(funcRecurs);
};
