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

console.log(
  convertToRelative([
    '/Users/tymur/GitHub/node-practice/src/assets/images/imgA/first-img-example@1x.webp',
    '/Users/tymur/GitHub/node-practice/src/assets/images/imgA/first-img-example@2x.webp',
    '/Users/tymur/GitHub/node-practice/src/assets/images/imgB/second-img-example@1x.webp',
    '/Users/tymur/GitHub/node-practice/src/assets/images/imgB/second-img-example@2x.webp',
  ])
);

export default convertToRelative;
