import { basename, extname } from 'path';

export const produceVarName = (filePath) => {
  if (/\.(ts|tsx)$/.test(filePath)) {
    return null;
  }

  return basename(filePath, extname(filePath)).replace(/[^a-zA-Z0-9$_]/g, '');
};
