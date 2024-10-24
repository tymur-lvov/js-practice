const filterPathname = (pathname, reExportsFileDir) => {
  const invalidBasenames = ['generateBarrelFile', 'DS_Store'];

  const isPathnameIncludesInvalidBasename = invalidBasenames.some((InvalidBasename) =>
    pathname.includes(InvalidBasename)
  );

  const isPathnameIncludesReExportsFileDir = pathname.includes(reExportsFileDir);

  if (!isPathnameIncludesInvalidBasename && isPathnameIncludesReExportsFileDir) return true;
};

export default filterPathname;
