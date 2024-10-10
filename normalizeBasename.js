const normalizeBasename = (basename) => {
  const camelCasedBasename = convertToCamelCase(basename);

  const normalizedBasename = replaceSpecialSymbol(camelCasedBasename);

  return normalizedBasename;
};
