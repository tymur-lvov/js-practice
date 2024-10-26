const convertToRelativePathname = (pathname, sourceFileDirPath) => {
  const dirs = pathname.split('/');

  const reExportsFileDirIndex = dirs.findIndex((dir) => dir === sourceFileDirPath);

  const relativePathnameWithoutDotAndSlash = dirs.slice(reExportsFileDirIndex + 1).join('/');

  return './' + relativePathnameWithoutDotAndSlash;
};

export default convertToRelativePathname;
