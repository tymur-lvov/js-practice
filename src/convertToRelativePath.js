const convertToRelativePath = (path, relativeDir) => {
  const relativeDirIndex = path
    .split('/')
    .findIndex((dir) => dir === relativeDir);

  const slicedPath = path
    .split('/')
    .slice(relativeDirIndex + 1)
    .join('/');

  return slicedPath.padStart(slicedPath.length + 2, './');
};

export default convertToRelativePath;
