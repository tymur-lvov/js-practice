const createPathStore = () => {
  let storedPath = null;

  return {
    storePath(path) {
      return (storedPath = path);
    },

    getStoredPath() {
      return storedPath;
    },

    isPathStored() {
      return Boolean(storedPath);
    },
  };
};

const pathStore = createPathStore();

export default pathStore;
