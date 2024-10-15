const pathnameStoreCreator = () => {
  let storedPathname;

  const storePathname = (pathname) => (storedPathname = pathname);
  const getStoredPathname = () => storedPathname;

  return { storePathname, getStoredPathname };
};

const pathnameStore = pathnameStoreCreator();

export default pathnameStore;
