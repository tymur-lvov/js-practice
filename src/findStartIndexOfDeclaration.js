const findStartIndexOfDeclaration = (contentLines, sourceFilePath) => {
  const startIndexOfDeclaration = contentLines.findIndex((line) => {
    return line.includes(sourceFilePath);
  });

  return startIndexOfDeclaration;
};

export default findStartIndexOfDeclaration;
