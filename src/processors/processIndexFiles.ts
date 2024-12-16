import { asyncCompose } from '../helpers/composers';
import { getIndexFilePath } from '../helpers/paths';

export const processIndexFiles = async (parentPaths) => {
  const indexFileProcessor = asyncCompose(getIndexFilePath);

  return Promise.all(parentPaths.map(indexFileProcessor));
};
