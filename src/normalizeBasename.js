const removeExtension = (basename) => basename.replace(/\.[^./]+$/, '');

const removeInvalidSymbols = (basename) => basename.replace(/[^a-zA-Z0-9_$]/g, '');

const composeFunctions = (funcA, funcB) => (argC) => funcB(funcA(argC));

const normalizeBasename = composeFunctions(removeExtension, removeInvalidSymbols);

export default normalizeBasename;
