import { resolve } from 'path';

const createPathResolver =
  (deps) =>
  (mode) =>
  (...pathParts) => {
    const { resolve } = deps;

    switch (mode) {
      case 'string': {
        return resolve(...pathParts);
      }

      case 'dirEnt': {
        const [dirEnt] = pathParts;
        const { parentPath, name } = dirEnt;

        return resolve(parentPath, name);
      }
    }
  };

const deps = { resolve };

export const resolvePath = createPathResolver(deps)('string');
export const resolveDirEntPath = createPathResolver(deps)('dirEnt');
