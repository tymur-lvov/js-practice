export type IProcessFilePath = (dirPath: string) => string;

export type IProcessFileData = (dirPath: string) => Promise<string>;

export type IGetAllNestedFilePaths = (dirPath: string) => Promise<string[]>;
