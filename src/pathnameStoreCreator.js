const pathnameStoreCreator = () => {
  let storedPathname;

  const storePathname = (pathname) => (storedPathname = pathname);
  const getStoredPathname = () => storedPathname;
  const isPathnameStored = () => Boolean(storedPathname);

  return { storePathname, getStoredPathname, isPathnameStored };
};

const pathnameStore = pathnameStoreCreator();

export default pathnameStore;
