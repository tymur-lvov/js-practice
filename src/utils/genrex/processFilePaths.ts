import { composeFuncs, getBasename, removeExtension } from '@utils';

const processFilePaths = (srcDirPath: string, filePaths: string[]): string[] => {
  const srcDir = getBasename(srcDirPath);

  const getRelativePath = (filePath: string): string => {
    const pathParts = filePath.split('/');

    const srcDirIndex = pathParts.indexOf(srcDir);

    return './' + pathParts.slice(srcDirIndex + 1).join('/');
  };

  return filePaths.map((filePath) => {
    const getRelativePathsWithoutExtensions = composeFuncs(getRelativePath, removeExtension);

    return getRelativePathsWithoutExtensions(filePath);
  });
};

export default processFilePaths;
