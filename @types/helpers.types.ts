export interface IConfig {
  targetDirPaths: string[];
  dirsToExclude: string[];
  filesToExclude: string[];
}

export type IGetConfigOption = (key: keyof IConfig) => IConfig[keyof IConfig];
