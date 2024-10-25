const convertToRelativePathname = (pathname, reExportsDirPath) => {
  const dirs = pathname.split('/');

  const reExportsFileDirIndex = dirs.findIndex((dir) => dir === reExportsDirPath);

  const relativePathnameWithoutDotAndSlash = dirs.slice(reExportsFileDirIndex + 1).join('/');

  return './' + relativePathnameWithoutDotAndSlash;
};

export default convertToRelativePathname;
