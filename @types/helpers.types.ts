import type { Dirent } from 'fs';

export interface IndexFileInt {
  indexFilePath: string;
  indexFileData: string;
}

export interface DirEntInt {
  dirEntInfo: Dirent;
  dirEntData: string | null;
}

export interface DirEntDataConditionInt {
  checkCondition: () => boolean;
  getResult: () => ReturnType<ReadFileDataType> | null;
}

export interface IndexFileNameConditionInt {
  checkCondition: () => boolean;
  getResult: () => ReturnType<GetIndexFileNameType> | ReturnType<GetTypesIndexFileNameType>;
}

export interface ExportStatementConditionInt {
  checkCondition: () => boolean;
  getResult: () =>
    | ReturnType<GetNamedExportStatementType>
    | ReturnType<GetNamedTypeExportStatementType>
    | ReturnType<GetDefaultExportStatementType>;
}

export type GetDefaultExportStatementType = (varName: any, realtivePath: any) => string;

export type GetNamedTypeExportStatementType = (realtivePath: string) => string;

export type GetNamedExportStatementType = (realtivePath: string) => string;

export type ReadFileDataType = (filePath: string) => Promise<string>;

export type GetIndexFileNameType = () => string;

export type GetTypesIndexFileNameType = () => string;

//

export type ComposeType = (funcs: (arg: any) => any[]) => (arg: any) => any;

export type AsyncComposeType = (funcs: (arg: any) => any[]) => (arg: any) => Promise<any>;

export type CreateIndexFilesType = (parentPaths: string[]) => Promise<IndexFileInt[]>;

export type AssignDirEntDataType = (dirEnts: Dirent[]) => Promise<DirEntInt[]>;

export type GetIndexFileNameConditionsType = (parentPath: string) => IndexFileNameConditionInt[];

export type GetDirEntDataConditionsType = (
  dirEnt: Dirent,
  dirEntPath: string
) => DirEntDataConditionInt[];

export type GetExportStatementConditionsType = (
  varName: string,
  realtivePath: string
) => ExportStatementConditionInt[];
