const errorHandleDecor = (callback) => {
  return async (...args) => {
    try {
      return await callback(...args);
    } catch (error) {
      if (error.code === 'ENOENT') {
        const rootDir = error.path.split('/').pop();

        error.message = `\"${rootDir}\" is not a correct root directory name. Expected \"src\".`;

        throw error;
      } else {
        throw error;
      }
    }
  };
};

export default errorHandleDecor;
