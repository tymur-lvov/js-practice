import { asyncCompose } from '../composers/composerModes';

export const assignIndexFileData = () => {};
export const assignIndexFilePath = () => {};

const createIndexFileProcessor = (deps) => async (context) => {
  const { asyncCompose, assignIndexFileData, assignIndexFilePath } = deps;

  return asyncCompose(assignIndexFilePath, assignIndexFileData)(context);
};

export const processIndexFile = createIndexFileProcessor({
  asyncCompose,
  assignIndexFileData,
  assignIndexFilePath,
});
