import * as fs from 'fs/promises';

import type { IFilterModules } from '@types';

export const filterModules: IFilterModules = async (filePaths) => {
  return filePaths.filter((filePath) => {});
};
