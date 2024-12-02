export const isFileAModule = (filePath, fileData) => {
  if (/\.(ts|tsx)$/.test(filePath)) {
    return fileData.includes('export');
  }

  return true;
};
