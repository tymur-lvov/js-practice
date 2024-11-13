import {
  decorAsyncFunc,
  processFilePath,
  filterFile,
  markExportedFile,
  getEntityPath,
  filterExportedFile,
  getEntities,
  getBasename,
} from '@utils';

const getFilePaths = async (srcDirPath: string): Promise<string[]> => {
  const srcDir = getBasename(srcDirPath);

  const dirEntities = await getEntities(srcDirPath, 'recursive');

  const files = dirEntities.filter(filterFile);

  const markedFiles = await Promise.all(files.map(markExportedFile));

  const exportedFiles = markedFiles.filter(filterExportedFile);

  const exportedFilePaths = exportedFiles.map(getEntityPath);

  return exportedFilePaths.map((filePath) => processFilePath(srcDir, filePath));
};

export default decorAsyncFunc(getFilePaths);
