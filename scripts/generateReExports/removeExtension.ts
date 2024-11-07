const removeExtension = (filePath: string): string => {
  return filePath.replace(/\.[^/.]+$/, '');
};

export default removeExtension;
