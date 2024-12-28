import { asyncCompose } from './helpers/composers';
import { writeIndexFiles } from './helpers/files';
import { getParentPaths } from './helpers/misc';
import { createIndexFiles } from './helpers/builders';

const main = async () => {
  asyncCompose(createIndexFiles, writeIndexFiles)(getParentPaths());
};

main();
