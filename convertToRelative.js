const convertToRelative = (pathnames) => {
  const imagesIndex = pathnames[0]
    .split('/')
    .findIndex((name) => name === 'images');

  return pathnames.map((pathname) => {
    const relativePath = pathname
      .split('/')
      .slice(imagesIndex + 1)
      .join('/');

    return relativePath.padStart(relativePath.length + 2, './');
  });
};

console.log(
  convertToRelative([
    '/Users/tymur/GitHub/node-practice/src/assets/images/imgA/imgA@1x.webp',
    '/Users/tymur/GitHub/node-practice/src/assets/images/imgA/imgA@2x.webp',
    '/Users/tymur/GitHub/node-practice/src/assets/images/imgB/imgB@1x.webp',
    '/Users/tymur/GitHub/node-practice/src/assets/images/imgB/imgB@2x.webp',
  ])
);

export default convertToRelative;
