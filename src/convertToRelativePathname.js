const convertToRelativePathname = (pathname, relativeDir) => {
  const dirs = pathname.split('/');

  const relativeDirIndex = dirs.findIndex((dir) => dir === relativeDir);

  const slicedPathname = dirs.slice(relativeDirIndex + 1).join('/');

  return slicedPathname.padStart(slicedPathname.length + 2, './');
};

export default convertToRelativePathname;
