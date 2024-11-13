import path from 'path';

const resolvePath = (pathname: string): string => {
  return path.resolve(pathname);
};

export default resolvePath;
