const concatReExports = (reExports) => {
  const barrelFileContent = reExports.reduce((content, reExport) => {
    const { variableName, relativePathname } = reExport;

    const reExportTemplate = `export { default as ${variableName} } from '${relativePathname}';\n`;

    return content.concat(reExportTemplate);
  }, '');

  return barrelFileContent;
};

export default concatReExports;
