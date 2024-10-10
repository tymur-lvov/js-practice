const replaceSpecialSymbol = (basename) => {
  return basename.replace(/[@]/, '_');
};

export default replaceSpecialSymbol;
