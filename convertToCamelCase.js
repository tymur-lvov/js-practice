const convertToCamelCase = (basename, relativeDir) => {
  return basename
    .split('-')
    .map((namePart, namePartIndex) => {
      if (namePart === '1x' || namePart === '2x') {
        return `@${namePart}`;
      }

      if (namePartIndex === 0 && relativeDir !== 'components') {
        return namePart;
      } else {
        return namePart.replace(namePart[0], namePart[0].toUpperCase());
      }
    })
    .join('')
    .replace(/[@]/g, '_');
};

export default convertToCamelCase;
