import configFile from '@config';

import { IGenrexConfig } from '@types';

const createGenrexConfig = (): IGenrexConfig => {
  const srcDirPaths = configFile.srcDirPaths;

  const excludedFiles = configFile.excludedFiles;

  const getSrcDirPaths = () => srcDirPaths;

  const getExcludedFiles = () => excludedFiles;

  return { getSrcDirPaths, getExcludedFiles };
};

const genrexConfig = createGenrexConfig();

export default genrexConfig;
