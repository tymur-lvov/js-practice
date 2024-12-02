export const produceIndexFilePath = (dirPath) => {
  dirPath.includes('@types') ? `${dirPath}/index.types.ts` : `${dirPath}/index.ts`;
};
