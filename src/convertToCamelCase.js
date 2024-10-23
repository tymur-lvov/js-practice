const convertToCamelCase = (basename, relativeDir) => {
  const basenameParts = basename.split('-');

  const camelCasedBasename = basenameParts.map((namePart, namePartIndex) => {
    const isFirstNamePart = namePartIndex === 0 && relativeDir !== 'components';

    if (isFirstNamePart) {
      return namePart;
    }

    const isLastNamePartDividedByDash = namePart === '1x' || namePart === '2x';

    if (isLastNamePartDividedByDash) {
      return namePart.padStart(namePart.length + 1, '@');
    }

    const firstLetter = namePart[0];

    return namePart.replace(firstLetter, firstLetter.toUpperCase());
  });

  return camelCasedBasename.join('').replace(/[@]/g, '_');
};

export default convertToCamelCase;
