export type IGetBasenameCreator = (
  mode: 'extension' | 'noExtension'
) => (filePath: string) => string;

export type IFunc = (arg: any) => any;
export type IComposer = (...funcs: IFunc[]) => IFunc;
