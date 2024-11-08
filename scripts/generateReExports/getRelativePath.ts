const getRelativePath = (srcDir: string, filePath: string): string => {
  const pathParts = filePath.split('/');

  const indexOfSrcDir = pathParts.indexOf(srcDir);

  return './' + pathParts.slice(indexOfSrcDir + 1).join('/');
};

export default getRelativePath;
