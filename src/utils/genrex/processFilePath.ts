import { getRelativePath, removeExtension } from '@utils';

const processFilePath = (srcDir: string, filePath: string): string => {
  return removeExtension(getRelativePath(srcDir, filePath));
};

export default processFilePath;
