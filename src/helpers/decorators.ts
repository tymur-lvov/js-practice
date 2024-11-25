export const mapDecor = (func: (arg: any) => any): ((arg: any) => any) => {
  const funcRecurs = (arg: any): any => {
    return !Array.isArray(arg) ? func(arg) : arg.map(funcRecurs);
  };

  return funcRecurs;
};
