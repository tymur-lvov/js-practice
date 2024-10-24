const convertToRelativePathname = (pathname, reExportsFileDir) => {
  const dirs = pathname.split('/');

  const reExportsFileDirIndex = dirs.findIndex((dir) => dir === reExportsFileDir);

  const relativePathnameWithoutDotAndSlash = dirs.slice(reExportsFileDirIndex + 1).join('/');

  return './' + relativePathnameWithoutDotAndSlash;
};

export default convertToRelativePathname;
