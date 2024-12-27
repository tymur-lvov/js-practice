import { asyncCompose } from './helpers/composers';
import { writeIndexFiles } from './helpers/files';
import { getParentPaths } from './helpers/misc';
import { buildIndexFiles } from './helpers/builders';

const main = async () => {
  asyncCompose(buildIndexFiles, writeIndexFiles)(getParentPaths());
};

main();
