export interface IReExportFile {
  filePath: string;
  fileData: string;
}

export type ICreateReExportFiles = (targetDirPaths: string[]) => IReExportFile[];

export type ICreateReExportFile = (targetDirPath: string) => IReExportFile;
