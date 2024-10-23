const findEndIndexOfDeclar = (contentLines, startIndexOfDeclar) => {
  const slicedLines = contentLines.slice(startIndexOfDeclar);

  const indexOfClosingBracket = slicedLines.findIndex((line) => line === '}');

  return startIndexOfDeclar + indexOfClosingBracket;
};

export default findEndIndexOfDeclar;
