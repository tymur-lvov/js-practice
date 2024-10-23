const concatReExports = (reExports) => {
  const barrelFileContent = reExports.reduce(
    (content, { variableName, relativePath }) => {
      const reExportTemplate = `export { default as ${variableName} } from '${relativePath}';\n`;

      return content.concat(reExportTemplate);
    },
    ''
  );

  return barrelFileContent;
};

export default concatReExports;
