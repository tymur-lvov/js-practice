import { convertToRelativePath, removeExtension } from '@scripts';

const processFilePath = (srcDir: string, filePath: string): string => {
  return removeExtension(convertToRelativePath(srcDir, filePath));
};

export default processFilePath;
