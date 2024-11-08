const produceStatementsFromTemplate = (filePaths: string[], variableNames: string[]): string[] => {
  return variableNames.map((variableName, index) => {
    const filePath = filePaths[index];

    return variableName.includes('_types')
      ? `export type { default as ${variableName} } from '${filePath}';`
      : `export { default as ${variableName} } from '${filePath}';`;
  });
};

export default produceStatementsFromTemplate;
