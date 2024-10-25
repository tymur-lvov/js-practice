const filterPathname = (pathname, sourceFilePath) => {
  const invalidBasenames = ['generateBarrelFile', 'DS_Store'];

  const isPathnameIncludesInvalidBasename = invalidBasenames.some((invalidBasename) =>
    pathname.includes(invalidBasename)
  );

  const isPathnameIncludesReExportsFileDir = pathname.includes(sourceFilePath);

  if (!isPathnameIncludesInvalidBasename && isPathnameIncludesReExportsFileDir) return true;
};

export default filterPathname;
