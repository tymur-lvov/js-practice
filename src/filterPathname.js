const filterPathname = (pathname, sourceFileDirPath) => {
  const invalidBasenames = ['generateBarrelFile', 'DS_Store'];

  const isPathnameIncludesInvalidBasename = invalidBasenames.some((invalidBasename) =>
    pathname.includes(invalidBasename)
  );

  const isPathnameIncludesReExportsFileDir = pathname.includes(sourceFileDirPath);

  if (!isPathnameIncludesInvalidBasename && isPathnameIncludesReExportsFileDir) return true;
};

export default filterPathname;
