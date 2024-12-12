export const removeExtension = ({ filePath, ...context }) => {
  const lastDotIndex = filePath.lastIndexOf('.');

  return { ...context, filePath: filePath.slice(0, lastDotIndex) };
};

export const sliceFromParentDir = ({ parentPath, filePath }) => {
  const parentPathParts = parentPath.split('/');
  const childPathParts = filePath.split('/');

  const [parentPathLastPart] = parentPathParts.slice(parentPathParts.length - 1);

  const parentDir = childPathParts.find((childPathPart) => childPathPart === parentPathLastPart);

  return childPathParts.slice(childPathParts.indexOf(parentDir));
};

export const transformToPathString = (filePath) => {
  return `./${filePath.join('/')}`;
};
