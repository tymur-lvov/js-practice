const normalizeBasename = (basename: string): string => {
  return basename.replace(/[^a-zA-Z0-9_$]/g, '_');
};

export default normalizeBasename;
