const getVariableNames = (filePaths: string[]): string[] => {
  return filePaths.map((filePath) => {
    return filePath
      .slice(filePath.lastIndexOf('/') + 1)

      .replace(/[^a-zA-Z0-9_$]/g, '_');
  });
};

export default getVariableNames;
