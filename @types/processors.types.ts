export interface IndexFileInterface {
  indexFilePath: string;
  indexFileData?: string;
}

export type ProcessIndexFilesType = (dirPaths: string[]) => Promise<IndexFileInterface[]>;

export type AssignIndexFilePathsType = (dirPaths: string[]) => IndexFileInterface[];

export type AssignIndexFilesDataType = (dirPaths: IndexFileInterface[]) => IndexFileInterface[];
