export interface IConfig {
  targetDirPaths: string[];
  itemsToExclude: string[];
}

export interface IFile {
  filePath: string;
  fileData: string;
}

export type IGetTargetDirPaths = () => string[];

export type IGetConfigOption = (key: keyof IConfig) => IConfig[keyof IConfig];

export type IIsExcludedItem = (itemPath: string) => boolean;

export type IExtendWithFileData = (filePaths: string[]) => Promise<IFile[]>;

export type IFilterModules = (files: IFile[]) => IFile[];
