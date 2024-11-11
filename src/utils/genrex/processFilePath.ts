import { composeFuncs, getRelativePath, removeExtension } from '@utils';

const processFilePath = (srcDir: string, filePath: string): string => {
  const processingFunc = composeFuncs(getRelativePath, removeExtension);

  return processingFunc(srcDir, filePath);
};

export default processFilePath;
