const findEndIndexOfDeclaration = (contentLines, startIndexOfDeclaration) => {
  const slicedLines = contentLines.slice(startIndexOfDeclaration);

  const indexOfClosingBracket = slicedLines.findIndex((line) => line === '}');

  return startIndexOfDeclaration + indexOfClosingBracket;
};

export default findEndIndexOfDeclaration;
