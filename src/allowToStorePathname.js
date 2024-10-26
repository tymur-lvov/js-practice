import pathnameStore from './producePathnameStore.js';

const allowToStorePathname = (subDirInfo, subDirPathname, sourceFileDirPath) => {
  const isPathnameStored = !!pathnameStore.getStoredPathname();

  const isSubDirDirectory = subDirInfo.isDirectory();

  const isSubDirPathnameIncludesReExportsFileDir = subDirPathname.includes(sourceFileDirPath);

  if (!isPathnameStored && !isSubDirDirectory && isSubDirPathnameIncludesReExportsFileDir)
    return true;
};

export default allowToStorePathname;
