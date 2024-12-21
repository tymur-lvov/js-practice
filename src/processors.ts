import { asyncCompose } from './helpers/composers';
import {
  assignDirEnts,
  assignFilePaths,
  assignFilteredFilePaths,
  assignFilteredFiles,
  assignIndexFileData,
  assignIndexFilePath,
} from './helpers/assigners';
import { reduceToIndexFileData } from './helpers/strings';

export const processIndexFiles = async (parentPaths) => {
  const indexFileProcessor = asyncCompose(assignIndexFilePath, assignIndexFileData);

  return Promise.all(parentPaths.map((parentPath) => indexFileProcessor({ parentPath })));
};

export const processIndexFileData = async (parentPath) => {
  const indexFileDataProcessor = asyncCompose(
    assignDirEnts,
    assignFilteredFiles,
    assignFilePaths,
    assignFilteredFilePaths,
    reduceToIndexFileData
  );

  console.log(await indexFileDataProcessor({ parentPath }));
  return indexFileDataProcessor({ parentPath });
};
