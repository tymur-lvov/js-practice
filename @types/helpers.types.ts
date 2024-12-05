import type { Dirent } from 'fs';

export interface ConfigInterface {
  targetDirPaths: string[];
  itemsToExclude: string[];
}

export interface FileInterface {
  filePath: string;
  fileData?: string;
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

export type FilterFilesToIncludeType = (files: FileInterface[]) => FileInterface[];

export type GetFilesToExcludeType = () => ReturnType<GetConfigOptionType>;

export type AssignFilePathsType = (files: Dirent[]) => FileInterface[];

export type GetFilePathType = (file: Dirent) => string;

export type AssignFilesDataType = (file: FileInterface[]) => Promise<FileInterface[]>;

export type GetFileDataType = (filePath: string) => Promise<string>;

export type FilterModulesType = (files: FileInterface[]) => FileInterface[];

export type IsFileToIncludeType = (filePath: string) => boolean;

export type IsEndsWithModuleExtensionType = (filePath: string) => boolean;

export type IsIncludesExportType = (fileData: string) => boolean;

export type IsModuleType = (filePath: string, fileData: string) => boolean;
