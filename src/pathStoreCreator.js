const pathStoreCreator = () => {
  let storedPath;

  const storePath = (path) => (storedPath = path);
  const getStoredPath = () => storedPath;
  const isPathStored = () => Boolean(storedPath);

  return { storePath, getStoredPath, isPathStored };
};

const pathStore = pathStoreCreator();

export default pathStore;
