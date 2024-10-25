const convertToRelativePathname = (pathname, sourceFilePath) => {
  const dirs = pathname.split('/');

  const reExportsFileDirIndex = dirs.findIndex((dir) => dir === sourceFilePath);

  const relativePathnameWithoutDotAndSlash = dirs.slice(reExportsFileDirIndex + 1).join('/');

  return './' + relativePathnameWithoutDotAndSlash;
};

export default convertToRelativePathname;
