export interface IConfig {
  targetDirPaths: string[];
  itemsToExclude: string[];
}

export interface IFile {
  filePath: string;
  fileData?: string;
}

export type IGetTargetDirPaths = () => string[];

export type IGetConfigOption = (key: keyof IConfig) => IConfig[keyof IConfig];

export type IIsItemToExclude = (itemPath: string) => boolean;

export type IIsFileAModule = (filePath: string, fileData: string) => boolean;
