import type { Dirent } from 'fs';

export interface ConfigInterface {
  targetDirPaths: string[];
  itemsToExclude: string[];
}

export interface FileInterface {
  filePath: string;
  fileData: string;
}
export type GetTargetDirPathsType = () => string[];

export type GetConfigOptionType = (key: keyof ConfigInterface) => ConfigInterface[typeof key];

export type CreateIndexFilesType = (dirPaths: string[]) => Promise<FileInterface[]>;

export type ProduceIndexFilePathType = (dirPath: string) => string;

export type ProduceIndexFileDataType = (dirPath: string) => Promise<string>;

export type CreateTargetFilesType = (dirPath: string) => Promise<FileInterface[]>;

export type GetFilesType = (dirPath: string) => Promise<Dirent[]>;

export type GetDirItemsType = (dirPath: string) => Promise<Dirent[]>;

export type FilterFilesType = (dirItems: Dirent[]) => Dirent[];

export type FilterFilesToIncludeType = (files: Dirent[], itemsToExclude: string[]) => Dirent[];

export type GetFilesToExcludeType = () => ReturnType<GetConfigOptionType>;
