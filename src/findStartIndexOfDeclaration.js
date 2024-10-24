const findStartIndexOfDeclaration = (contentLines, reExportsFileDir) => {
  const startIndexOfDeclaration = contentLines.findIndex((line) => {
    return line.includes(reExportsFileDir);
  });

  return startIndexOfDeclaration;
};

export default findStartIndexOfDeclaration;
