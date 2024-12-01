export type IProcessFilePath = (dirPath: string) => string;

export type IProcessFileData = (dirPath: string) => Promise<string>;

export type IGetFilePathsRecurs = (dirPath: string) => Promise<string[]>;
