import * as path from 'path';

export const getAbsolutePath = (...pathParts: string[]): string => {
  return path.resolve(...pathParts);
};
