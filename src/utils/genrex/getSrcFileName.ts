const getSrcFileName = (srcDirPath: string): string => {
  return srcDirPath.includes('@types') ? 'index.types.ts' : 'index.ts';
};

export default getSrcFileName;
