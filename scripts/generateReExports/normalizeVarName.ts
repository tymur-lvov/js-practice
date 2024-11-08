const normalizeVarName = (varName: string): string => {
  return varName.replace(/[^a-zA-Z0-9_$]/g, '_');
};

export default normalizeVarName;
