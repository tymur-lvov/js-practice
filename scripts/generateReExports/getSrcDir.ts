const getSrcDir = (srcDirPath: string): string => {
  const indexOfLastSlash = srcDirPath.lastIndexOf('/');

  return srcDirPath.slice(indexOfLastSlash + 1);
};

export default getSrcDir;
