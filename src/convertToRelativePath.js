const convertToRelativePath = (pathname, relativeDir) => {
  const relativeDirIndex = pathname
    .split('/')
    .findIndex((dir) => dir === relativeDir);

  const slicedPath = pathname
    .split('/')
    .slice(relativeDirIndex + 1)
    .join('/');

  return slicedPath.padStart(slicedPath.length + 2, './');
};

export default convertToRelativePath;
