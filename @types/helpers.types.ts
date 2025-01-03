import type { Dirent } from 'fs';

export interface IConfig {
  parentPaths: string[];
  itemsToExclude: string[];
}

export interface IIndexFile {
  indexFilePath: string;
  indexFileData: string;
}

export interface IDirEntDataCondition {
  checkCondition: () => boolean;
  getResult: () => ReturnType<IReadFileData>;
}

export interface IIndexFileNameCondition {
  checkCondition: () => boolean;
  getResult: () => ReturnType<IGetIndexFileName> | ReturnType<IGetTypesIndexFileName>;
}

export interface IExportStatementCondition {
  checkCondition: () => boolean;
  getResult: () =>
    | ReturnType<IGetNamedExportStatement>
    | ReturnType<IGetNamedTypeExportStatement>
    | ReturnType<IGetDefaultExportStatement>;
}

export interface IErrorMessageCondition {
  checkCondition: () => boolean;
  getResult: () => string;
}

export type IMain = () => Promise<void>;

export type IGetErrorMessageConditions = (reason: string) => IErrorMessageCondition[];

export type ICreateError = (reason: string) => Error;

export type IGetConfigOption = (option: keyof IConfig) => IConfig[keyof IConfig];

export type IReadFileData = (filePath: string) => Promise<string>;

export type IWriteFileData = (filePath: string, fileData: string) => Promise<void>;

export type IWriteIndexFiles = (indexFiles: IIndexFile[]) => void;

export type ICreateIndexFileData = (parentPath: string, modulePaths: string[]) => string;

export type IGetIndexFileData = (parentPath: string) => Promise<ReturnType<ICreateIndexFileData>>;

export type IGetDirEntsRecurs = (parentPath: string) => Promise<Dirent[]>;

export type IGetDirEntData = (dirEnt: Dirent) => ReturnType<IFindDirEntData>;

export type IFindDirEntData = (
  dirEnt: Dirent,
  dirEntPath: string
) => ReturnType<IDirEntDataCondition['getResult']>;

export type IFindIndexFileName = (
  parentPath: string
) => ReturnType<IIndexFileNameCondition['getResult']>;

export type IFindExportStatement = (
  varName: string,
  parentPath: string
) => ReturnType<IExportStatementCondition['getResult']>;

export type IFindErrorMessage = (reason: string) => ReturnType<IErrorMessageCondition['getResult']>;

export type ICompose = (...funcs: ((arg: any) => any)[]) => (arg: any) => any;

export type IAsyncCompose = (...funcs: ((arg: any) => any)[]) => (arg: any) => Promise<any>;

export type ICreateIndexFiles = (parentPaths: string[]) => Promise<IIndexFile[]>;

export type IGetIndexFileNameConditions = (parentPath: string) => IIndexFileNameCondition[];

export type IGetIndexFileName = () => string;

export type IGetTypesIndexFileName = () => string;

export type IGetDirEntDataConditions = (
  dirEnt: Dirent,
  dirEntPath: string
) => IDirEntDataCondition[];

export type IGetExportStatementConditions = (
  varName: string,
  realtivePath: string
) => IExportStatementCondition[];

export type IFilterFiles = (dirEnts: Dirent[]) => Dirent[];

export type IFilterFilesToInclude = (dirEnts: Dirent[]) => Dirent[];

export type IAppendDotAndSlash = (filePath: string) => string;

export type IGetPath = (parentPath: string, name?: string) => string;

export type IGetBasename = (filePath: string) => string;

export type ISterilizeBasename = (basename: string) => string;

export type IGetIndexFilePath = (parentPath: string) => ReturnType<IGetPath>;

export type GetRelativePathType = (
  parentPath: string,
  filePath: string
) => ReturnType<IAppendDotAndSlash>;

export type IGetTargetFiles = (parentPath: string) => Promise<ReturnType<IFilterFilesToInclude>>;

export type IGetFilePaths = (parentPath: string) => Promise<ReturnType<IGetPath>[]>;

export type ISliceFromParentDir = (parentPath: string, filePath: string) => string;

export type IIsFindIndexFileNameError = (reason: string) => boolean;

export type IIsFindExportStatementError = (reason: string) => boolean;

export type IIsFindDirEntDataError = (reason: string) => boolean;

export type IIsEntityAFile = (dirEnt: Dirent) => boolean;

export type IIsItemToBeExcluded = (parentPath: string, name: string, item: string) => boolean;

export type IIsTypesPath = (path: string) => boolean;

export type IIsEndsWithTsOrTsxExtension = (path: string) => boolean;

export type IIsDefaultModule = (filePath: string) => boolean;

export type IIsNamedModule = (filePath: string) => boolean;

export type IIsTypeModule = (filePath: string) => boolean;

export type IIsFileToBeIncluded = ({ parentPath, name }: Dirent) => boolean;

export type IGetNamedExportStatement = (realtivePath: string) => string;

export type IGetNamedTypeExportStatement = (realtivePath: string) => string;

export type IGetDefaultExportStatement = (varName: any, realtivePath: any) => string;

export type IConcatExportStatement = (fileData: string, exportStatement: string) => string;

export type IDeleteExtension = (filePath: string) => string;

export type ISplitToParts = (div: string, ...strings: string[]) => string[][];

export type IGetVarName = (filePath: string) => string;

export type IGetParentDirIndex = (parentPathParts: string[], filePathParts: string[]) => number;

export type IGetExportStatement = (parentPath: string, modulePath: string) => string;

export type IGetIndexFileNameErrorMessage = () => string;

export type IGetExportStatementErrorMessage = () => string;

export type IGetDirEntDataErrorMessage = () => string;

export type IGetEmptyStringPromise = () => Promise<string>;
