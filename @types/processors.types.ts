import type { Dirent } from 'fs';

export type IProcessFilePath = (rawDirPath: string) => string;

export type IProcessFileData = (rawDirPath: string) => Promise<string>;

export type IGetNestedFilePathsRecurs = (dirPath: string) => Promise<string[]>;
