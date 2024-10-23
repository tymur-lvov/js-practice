const convertToRelativePath = (path, relativeDir) => {
  const splittedPath = path.split('/');

  const relativeDirIndex = splittedPath.findIndex((dir) => dir === relativeDir);

  const slicedPath = splittedPath.slice(relativeDirIndex + 1).join('/');

  return slicedPath.padStart(slicedPath.length + 2, './');
};

export default convertToRelativePath;
