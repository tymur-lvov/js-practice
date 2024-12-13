import { assignIndexFileData } from '../assigners/assignIndexFileData';
import { assignIndexFilePath } from '../assigners/assignIndexFilePath';
import { asyncCompose } from '../composers/composers';

const createIndexFileProcessor = (deps) => async (context) => {
  const { asyncCompose, assignIndexFilePath, assignIndexFileData } = deps;

  return asyncCompose(assignIndexFilePath, assignIndexFileData)(context);
};

const deps = { asyncCompose, assignIndexFilePath, assignIndexFileData };

export const processIndexFile = createIndexFileProcessor(deps);
