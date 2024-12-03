export const processIndexFiles = async (dirPaths) => {
  const filesWithPaths = assignIndexFilePaths(dirPaths);
  const filesWithData = assignIndexFilesData(dirPaths);

  return dirPaths.map((dirPath) => {
    return {
      filePath: createIndexFilePath(dirPath),
      fileData: createIndexFileData(dirPath),
    };
  });
};

// Refactor
