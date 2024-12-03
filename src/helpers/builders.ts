export const createIndexFiles = async (dirPaths) => {
  return dirPaths.map((dirPath) => {
    return {
      filePath: assignIndexFilePath(dirPath),
      fileData: assignIndexFileData(dirPath),
    };
  });
};
