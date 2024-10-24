const generateVariableName = (pathname) => {
  const slashIndex = pathname.lastIndexOf('/');

  const dotIndex = pathname.lastIndexOf('.');

  const basename = pathname.slice(slashIndex + 1, dotIndex);

  return basename.replace(/[^a-zA-Z0-9_$]/g, '');
};

export default generateVariableName;
