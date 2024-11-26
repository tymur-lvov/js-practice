export type IFunc = (arg: any) => any;
export type IComposer = (...funcs: IFunc[]) => IFunc;
export type IDecorator = (func: IFunc) => IFunc;
