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

export default convertToCamelCase;
