const convertToRelativePath = (pathname, relativeDir) => {
  const relativeDirIndex = pathname
    .split('/')
    .findIndex((dir) => dir === relativeDir);

  const slicedPath = pathname
    .split('/')
    .slice(relativeDirIndex + 1)
    .join('/');

  const relativePath = slicedPath.padStart(slicedPath.length + 2, './');

  return relativePath;
};

export default convertToRelativePath;
