export const mapDecor = (func: (arg: any) => any) => {
  const funcRecurs = (arg: any[]): any[] => {
    if (Array.isArray(arg)) {
      return arg.map(funcRecurs);
    } else {
      return func(arg);
    }
  };

  return funcRecurs;
};
