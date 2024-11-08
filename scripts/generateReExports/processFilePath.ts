import { getRelativePath, removeExtension } from '@scripts';

const processFilePath = (srcDir: string, filePath: string): string => {
  return removeExtension(getRelativePath(srcDir, filePath));
};

export default processFilePath;
