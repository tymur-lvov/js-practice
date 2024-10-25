const filterPathname = (pathname, srcFileDirPath) => {
  const invalidBasenames = ['generateBarrelFile', 'DS_Store'];

  const isPathnameIncludesInvalidBasename = invalidBasenames.some((invalidBasename) =>
    pathname.includes(invalidBasename)
  );

  const isPathnameIncludesReExportsFileDir = pathname.includes(srcFileDirPath);

  if (!isPathnameIncludesInvalidBasename && isPathnameIncludesReExportsFileDir) return true;
};

export default filterPathname;
