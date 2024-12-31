import { asyncCompose, writeIndexFiles, getConfigOption, createIndexFiles } from '@helpers';

import type { IMain } from '@types';

const main: IMain = async () => {
  const parentPaths = getConfigOption('parentPaths');

  asyncCompose(createIndexFiles, writeIndexFiles)(parentPaths);
};

main();
