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

export const asyncMapDecor = (func: (arg: any) => any) => {
  const funcRecurs = async (arg: any[]): Promise<any[]> => {
    if (Array.isArray(arg)) {
      return Promise.all(arg.map(funcRecurs));
    } else {
      return func(arg);
    }
  };

  return funcRecurs;
};
