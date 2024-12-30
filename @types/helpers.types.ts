import type { Dirent } from 'fs';

export interface ConfigInt {
  parentPaths: string[];
  itemsToExclude: string[];
}

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

export type WriteFileDataType = (filePath: string, fileData: string) => Promise<void>;

export type WriteIndexFilesType = (indexFiles: IndexFileInt[]) => void;

export type CreateIndexFileDataType = (parentPath: string, modulePaths: string[]) => string;

export type GetIndexFileDataType = (
  parentPath: string
) => Promise<ReturnType<CreateIndexFileDataType>>;

export type GetDirEntsRecursType = (parentPath: string) => Promise<Dirent[]>;

export type GetDirEntDataType = (dirEnt: Dirent) => ReturnType<FindDirEntDataType>;

export type FindDirEntDataType = (
  dirEnt: Dirent,
  dirEntPath: string
) => ReturnType<DirEntDataConditionInt['getResult']>;

export type FindIndexFileNameType = (
  parentPath: string
) => ReturnType<IndexFileNameConditionInt['getResult']>;

export type FindExportStatementType = (
  varName: string,
  parentPath: string
) => ReturnType<ExportStatementConditionInt['getResult']>;

export type ComposeType = (...funcs: ((arg: any) => any)[]) => (arg: any) => any;

export type AsyncComposeType = (...funcs: ((arg: any) => any)[]) => (arg: any) => Promise<any>;

export type CreateIndexFilesType = (parentPaths: string[]) => Promise<IndexFileInt[]>;

export type AssignDirEntDataType = (dirEnts: Dirent[]) => Promise<DirEntInt[]>;

export type GetIndexFileNameConditionsType = (parentPath: string) => IndexFileNameConditionInt[];

export type GetParentPathsType = () => ConfigInt['parentPaths'];

export type GetItemsToExcludeType = () => ConfigInt['itemsToExclude'];

export type GetIndexFileNameType = () => string;

export type GetTypesIndexFileNameType = () => string;

export type GetDirEntDataConditionsType = (
  dirEnt: Dirent,
  dirEntPath: string
) => DirEntDataConditionInt[];

export type GetExportStatementConditionsType = (
  varName: string,
  realtivePath: string
) => ExportStatementConditionInt[];

export type FilterFilesType = (dirEnts: DirEntInt[]) => DirEntInt[];

export type FilterFilesToIncludeType = (dirEnts: DirEntInt[]) => DirEntInt[];

export type FilterModulesType = (dirEnts: DirEntInt[]) => DirEntInt[];

export type IsFileAModuleType = (fileName: string, fileData: string) => boolean;

export type AppendDotAndSlashType = (filePath: string) => string;

export type GetPathType = (parentPath: string, name: string) => string;

export type GetBasenameType = (filePath: string) => string;

export type SterilizeBasenameType = (basename: string) => string;

export type GetIndexFilePathType = (parentPath: string) => ReturnType<GetPathType>;

export type GetRelativePathType = (
  parentPath: string,
  filePath: string
) => ReturnType<AppendDotAndSlashType>;

export type GetTargetFilesType = (parentPath: string) => Promise<ReturnType<FilterModulesType>>;

export type GetFilePathsType = (parentPath: string) => Promise<ReturnType<GetPathType>[]>;

export type SliceFromParentDirType = (parentPath: string, filePath: string) => string;
