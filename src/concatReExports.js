const concatReExports = (reExports) => {
  return reExports.reduce((resultString, reExport) => {
    return resultString.concat(
      `export { default as ${reExport.variableName} } from '${reExport.relativePath}';\n`
    );
  }, '');
};

export default concatReExports;
