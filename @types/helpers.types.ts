export interface IConfig {
  targetDirPaths: string[];
  itemsToExclude: string[];
}

export type IGetTargetDirPaths = () => string[];

export type IGetConfigOption = (key: keyof IConfig) => IConfig[keyof IConfig];

export type IIsExcludedItem = (itemPath: string) => boolean;

export type IFilterModules = (filePaths: string[]) => string[];
