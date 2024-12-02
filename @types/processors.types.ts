import type { Dirent } from 'fs';

export type IProcessFilePath = (dirPath: string) => string;

export type IProcessFileData = (dirPath: string) => Promise<string>;

export type IGetFileEntsRecurs = (dirPath: string) => Promise<Dirent[]>;
