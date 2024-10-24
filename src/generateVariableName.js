import { basename } from 'path';

const generateVariableName = (pathname) => {
  const basenameWithoutExtension = basename(pathname).replace(/\.[^./]+$/, '');

  return basenameWithoutExtension.replace(/[^a-zA-Z0-9_$]/g, '');
};

export default generateVariableName;
