import { asyncCompose } from './helpers/composers';
import { writeIndexFiles } from './helpers/files';
import { getParentPaths } from './helpers/misc';
import { createIndexFiles } from './helpers/builders';
import type { IMain } from '../@types/helpers.types';

const main: IMain = async () => {
  asyncCompose(createIndexFiles, writeIndexFiles)(getParentPaths());
};

main();
