import { asyncCompose, getConfigOption } from '@helpers';
import { processIndexFiles } from '@processors';

(async () => {
  asyncCompose(processIndexFiles)(getConfigOption('targetDirPaths'));
})();
