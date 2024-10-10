const generateVariableNames = (pathnames) => {
  const variableNames = pathnames.map((pathname) => {
    const slashIndex = pathname.lastIndexOf('/');
    const dotIndex = pathname.lastIndexOf('.');

    const basename = pathname.slice(slashIndex + 1, dotIndex);

    return normalizeBasename(basename);
  });

  return variableNames;
};

export default generateVariableNames;
