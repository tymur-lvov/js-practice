const convertToRelative = (pathnames) => {
  const imagesIndex = pathnames[0]
    .split('/')
    .findIndex((dirname) => dirname === 'images');

  return pathnames.map((pathname) => {
    const relativePath = pathname
      .split('/')
      .slice(imagesIndex + 1)
      .join('/');

    return relativePath.padStart(relativePath.length + 2, './');
  });
};

export default convertToRelative;
