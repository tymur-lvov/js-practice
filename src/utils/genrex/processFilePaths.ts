import { composeFuncs, getBasename, getRelativePath, removeExtension } from '@utils';

const processFilePaths = (srcDirPath: string, filePaths: string[]): string[] => {
  const srcDir = getBasename(srcDirPath);

  return filePaths.map((filePath) => {
    const getRelativePathsWithoutExtensions = composeFuncs(getRelativePath, removeExtension);

    return getRelativePathsWithoutExtensions(srcDir, filePath);
  });
};

export default processFilePaths;
