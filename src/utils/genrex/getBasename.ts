import * as path from 'path';

const getBasename = (pathname: string): string => {
  return path.basename(pathname);
};

export default getBasename;
