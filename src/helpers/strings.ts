export const getExportStatement = (parentPath, filePath) => {
  return 'exportStatement...';
};

export const concatExportStatement = (fileData, parentPath, filePath) => {
  const exportStatement = getExportStatement(parentPath, filePath);

  return fileData.concat(exportStatement);
};

export const reduceToIndexFileData = ({ parentPath, filePaths }) => {
  return filePaths.reduce(
    (fileData, filePath) => concatExportStatement(fileData, parentPath, filePath),
    ''
  );
};
