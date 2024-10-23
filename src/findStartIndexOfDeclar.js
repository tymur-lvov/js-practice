const findStartIndexOfDeclar = (contentLines, relativeDir) => {
  const startIndexOfDeclar = contentLines.findIndex((line) => {
    return line.includes(relativeDir);
  });

  return startIndexOfDeclar;
};

export default findStartIndexOfDeclar;
