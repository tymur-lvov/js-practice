const concatReExports = (reExports) => {
  const barrelFileContent = reExports.reduce((content, reExport) => {
    const { variableName, relativePath } = reExport;

    const reExportTemplate = `export { default as ${variableName} } from '${relativePath}';\n`;

    return content.concat(reExportTemplate);
  }, '');

  return barrelFileContent;
};

export default concatReExports;
