const pathnameStoreCreator = () => {
  let savedPathname;

  const savePathname = (pathname) => (savedPathname = pathname);
  const getSavedPathname = () => savedPathname;

  return { savePathname, getSavedPathname };
};

export default pathnameStoreCreator;
