const findStartIndexOfDeclar = (contentLines, relativeDir) => {
  const startIndexOfDeclaration = contentLines.findIndex((line) => {
    return line.includes(relativeDir);
  });

  return startIndexOfDeclaration;
};

export default findStartIndexOfDeclar;
