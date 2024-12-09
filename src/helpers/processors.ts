import { asyncCompose } from './composers';
import { assignFilePaths } from './paths';
import { assignFilesData } from './files';
import { filterFiles, filterFilesToInclude, filterModulesAndAssets } from './filters';

export const processExportFiles = async (dirEnts) => {
  console.log(
    await asyncCompose(
      filterFiles,
      assignFilePaths,
      filterFilesToInclude,
      assignFilesData,
      filterModulesAndAssets
    )(dirEnts)
  );
};
