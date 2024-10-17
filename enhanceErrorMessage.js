const enhanceErrorMessage = (error) => {
  if (!error.code) {
    return error;
  }

  const rootDir = error.path.split('/').pop();

  switch (error.code) {
    case 'ENOENT': {
      error.message = `\"${rootDir}\" is not a correct root directory name. Expected \"src\".`;

      return error;
    }

    case 'EISDIR': {
      error.message = `\"${rootDir}\" is not a file. File expected.`;

      return error;
    }
  }
};

export default enhanceErrorMessage;
