const produceErrorMessage = (reason) => {
  switch (reason) {
    case '!relativeDir': {
      return 'Relative directory name as an argument is required.';
    }

    case '!isValidRelativeDir': {
      return 'Relative directory name must be "components", "utils" or "images".';
    }

    case '!pathnames.length': {
      return 'All directories are empty. Nothing to re-export.';
    }

    default: {
      return null;
    }
  }
};

export default produceErrorMessage;
