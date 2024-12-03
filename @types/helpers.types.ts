export interface ConfigInterface {
  targetDirPaths: string[];
  itemsToExclude: string[];
}

export type GetConfigOptionType = (key: keyof ConfigInterface) => ConfigInterface[typeof key];
