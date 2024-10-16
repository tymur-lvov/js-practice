const filterPathnames = (pathnames, relativeDir) => {
  return pathnames.filter((pathname) => {
    if (relativeDir === 'components') {
      return pathname.includes('components');
    } else {
      return pathname.includes('images');
    }
  });
};

export default filterPathnames;
