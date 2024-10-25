const producePathnameStore = () => {
  let storedPathname = null;

  return {
    storePathname: (pathname) => (storedPathname = pathname),

    getStoredPathname: () => storedPathname,
  };
};

const pathnameStore = producePathnameStore();

export default pathnameStore;
