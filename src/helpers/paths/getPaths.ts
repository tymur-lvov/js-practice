import { resolve } from 'path';

const deps = { resolve };

const getPathCreator = ({ resolve }) => {
  const getPath = (...pathParts) => resolve(...pathParts);

  const getDirEntPath = ({ parentPath, name }) => resolve(parentPath, name);

  return { getPath, getDirEntPath };
};

export const { getPath, getDirEntPath } = getPathCreator(deps);
