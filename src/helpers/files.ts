import { readdir } from 'fs/promises';
import { concatExportStatement, getExportStatement, getVarName } from './strings';
import { getFilePaths, getRelativePath } from './paths';
import { indexFileName, typesIndexFileName } from '../constants';

export const getDirEntsRecurs = async (parentPath) => {
  return readdir(parentPath, { withFileTypes: true, recursive: true });
};
