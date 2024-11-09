const getRelativePath = (srcDir: string, filePath: string): string => {
  const pathParts = filePath.split('/');

  const srcDirIndex = pathParts.indexOf(srcDir);

  return './' + pathParts.slice(srcDirIndex + 1).join('/');
};

export default getRelativePath;
