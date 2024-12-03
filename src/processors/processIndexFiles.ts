import { compose } from '@helpers';
import { assignIndexFilePaths, assignIndexFilesData } from '@processors';

import type { ProcessIndexFilesType } from '@types';

export const processIndexFiles: ProcessIndexFilesType = async (dirPaths) => {
  return compose(assignIndexFilePaths, assignIndexFilesData)(dirPaths);
};
