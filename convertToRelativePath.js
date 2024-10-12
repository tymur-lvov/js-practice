const convertToRelativePath = (pathname, relativeDirName) => {
  const relativeDirNameIndex = pathname
    .split('/')
    .findIndex((dirname) => dirname === relativeDirName);

  const slicedPath = pathname
    .split('/')
    .slice(relativeDirNameIndex + 1)
    .join('/');

  const relativePath = slicedPath.padStart(slicedPath.length + 2, './');

  return relativePath;
};

export default convertToRelativePath;
