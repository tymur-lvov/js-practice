import { asyncCompose } from './helpers/composers';
import {
  assignDirEnts,
  assignFiles,
  assignIndexFileData,
  assignIndexFilePath,
} from './helpers/assigners';

export const processIndexFiles = async (parentPaths) => {
  const indexFileProcessor = asyncCompose(assignIndexFilePath, assignIndexFileData);

  return Promise.all(parentPaths.map((parentPath) => indexFileProcessor({ parentPath })));
};

export const processIndexFileData = async (parentPath) => {
  const indexFileDataProcessor = asyncCompose(assignDirEnts, assignFiles);

  return indexFileDataProcessor({ parentPath });
};
