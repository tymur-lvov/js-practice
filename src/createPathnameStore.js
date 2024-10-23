const createPathnameStore = () => {
  let storedPathname = null;

  return {
    storePathname(pathname) {
      return (storedPathname = pathname);
    },

    getStoredPathname() {
      return storedPathname;
    },

    isPathnameStored() {
      return Boolean(storedPathname);
    },
  };
};

const pathnameStore = createPathnameStore();

export default pathnameStore;
