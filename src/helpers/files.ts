import { readdir } from 'fs/promises';

export const getDirEnts = async (parentPath) => {
  return readdir(parentPath, { withFileTypes: true, recursive: true });
};
