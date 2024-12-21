import { readdir } from 'fs/promises';
import { concatExportStatement, getExportStatement } from './strings';

export const getDirEnts = async (parentPath) => {
  return readdir(parentPath, { withFileTypes: true, recursive: true });
};
