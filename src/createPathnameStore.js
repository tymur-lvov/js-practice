const createPathnameStore = () => {
  let storedPathname = null;

  return {
    storePathname: (pathname) => (storedPathname = pathname),

    getStoredPathname: () => storedPathname,
  };
};

const pathnameStore = createPathnameStore();

export default pathnameStore;
