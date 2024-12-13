import { compose } from '../composers/composers';
import { resolvePath } from '../helpers/paths/pathResolvers';

const createIndexFilePathAssigner = (deps) => (context) => {
  const { compose, resolvePath } = deps;
  const { dirPath } = context;

  return { ...context, filePath: compose(resolvePath)(dirPath) };
};

const deps = { compose, resolvePath };

export const assignIndexFilePath = createIndexFilePathAssigner(deps);
