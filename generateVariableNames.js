const convertToCamelCase = (basename) => {
  const camelCasedBasename = basename.split('-').map((namePart, index) => {
    if (index === 0) {
      return namePart;
    } else {
      return namePart.replace(namePart[0], namePart[0].toUpperCase());
    }
  });

  return camelCasedBasename.join('');
};

const replaceSpecialSymbol = (basename) => {
  return basename.replace(/[@]/, '_');
};

const normalizeBasename = (basename) => {
  const camelCasedBasename = convertToCamelCase(basename);

  const normalizedBasename = replaceSpecialSymbol(camelCasedBasename);

  return normalizedBasename;
};

const generateVariableNames = (pathnames) => {
  const variableNames = pathnames.map((pathname) => {
    const slashIndex = pathname.lastIndexOf('/');
    const dotIndex = pathname.lastIndexOf('.');

    const basename = pathname.slice(slashIndex + 1, dotIndex);

    return normalizeBasename(basename);
  });

  return variableNames;
};

console.log(
  generateVariableNames([
    './imgA/first-img-example@1x.webp',
    './imgA/first-img-example@2x.webp',
    './imgB/second-img-example@1x.webp',
    './imgB/second-img-example@2x.webp',
  ])
);

export default generateVariableNames;
