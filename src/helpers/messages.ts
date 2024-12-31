import type {
  IGetDirEntDataErrorMessage,
  IGetIndexFileNameErrorMessage,
  IGetExportStatementErrorMessage,
} from '@types';

export const getIndexFileNameErrorMessage: IGetIndexFileNameErrorMessage = () => {
  return 'Index file name condition result not found';
};

export const getExportStatementErrorMessage: IGetExportStatementErrorMessage = () => {
  return 'Export condition result not found';
};

export const getDirEntDataErrorMessage: IGetDirEntDataErrorMessage = () => {
  return 'DirEnt data condition result not found';
};
