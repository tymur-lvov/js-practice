export type IFunc = (arg: any) => any;
export type IComposer = (...funcs: IFunc[]) => IFunc;
