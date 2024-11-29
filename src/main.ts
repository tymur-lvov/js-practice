import {
  asyncCompose,
  filterFiles,
  filterFilesToInclude,
  getConfigOption,
  getDirEntPath,
  getDirEntsRecurs,
  getVarName,
} from '@helpers';

import type { Dirent } from 'fs';

const main = async () => {
  asyncCompose(getConfigOption, createIndexFiles)('targetDirPaths');
};

const createIndexFiles = async (targetDirPaths: string[]) => {
  return Promise.all(
    targetDirPaths.map(async (targetDirPath) => {
      const targetDirFiles = await getTargetDirFiles(targetDirPath);

      // console.log();
      await Promise.all(
        targetDirFiles.map((file) => ({
          filePath: getIndexFilePath(targetDirPath),
          fileData: getIndexFileData(targetDirPath, file),
        }))
      );
    })
  );
};

const getIndexFileData = (targetDirPath: string, file: Dirent) => {
  const filePath = getDirEntPath(file);
  const varName = getVarName(filePath);
  // console.log(varName);

  return 'File data...';
};

const getIndexFilePath = (targetDirPath: string): string => {
  return `${targetDirPath}/index.ts`;
};

const getTargetDirFiles = async (targetDirPath: string): Promise<Dirent[]> => {
  return asyncCompose(getDirEntsRecurs, filterFiles, filterFilesToInclude)(targetDirPath);
};

main();
