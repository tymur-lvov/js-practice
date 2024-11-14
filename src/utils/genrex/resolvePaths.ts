import path from 'path';

const resolvePaths = (...pathnames: string[]): string => {
  return path.resolve(...pathnames);
};

export default resolvePaths;
