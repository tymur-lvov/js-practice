export const createIndexFileData = ({ parentPath, childFiles }) => {
  const res = childFiles.reduce((data, { filePath }) => {
    const getRelativePath = (parentPath, childPath) => {
      const parentPathElements = parentPath.split('/');
      const parentPathLastElement = parentPathElements[parentPathElements.length - 1];

      const childPathElements = childPath.split('/');
      const parentDirIndex = childPathElements.indexOf(parentPathLastElement);

      const relativePath = `./${childPathElements.slice(parentDirIndex + 1).join('/')}`;
      const lastDotIndex = relativePath.lastIndexOf('.');

      return relativePath.slice(0, lastDotIndex);
    };

    const relativePath = getRelativePath(parentPath, filePath);

    if (!/\.(ts|tsx)$/.test(filePath)) {
      const varName = basename(filePath, extname(filePath)).replace(/[^a-zA-Z0-9$_]/g, '');

      return data.concat(`export { default as ${varName} } from '${relativePath}';\n`);
    }

    return data.concat(
      `export ${filePath.includes('@types') ? 'type ' : ''}* from '${relativePath}';\n`
    );
  }, '');

  console.log(res);
};
