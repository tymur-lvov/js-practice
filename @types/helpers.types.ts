export interface IConfig {
  targetDirPaths: string[];
  itemsToExclude: string[];
}

export type IGetTargetDirPaths = () => string[];

export type IGetConfigOption = (key: keyof IConfig) => IConfig[keyof IConfig];

export type IIsFileEligibleForReExport = (itemPath: string) => boolean;
