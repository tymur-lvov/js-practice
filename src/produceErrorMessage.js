const produceErrorMessage = (reason) => {
  switch (reason) {
    case '!isArgumentProvided':
      return 'Relative directory name as an argument is required.';

    case '!isArgumentValid':
      return 'Relative directory name must be "components", "utils" or "images".';

    case '!pathnames.length':
      return 'All directories are empty. Nothing to re-export.';

    default:
      return null;
  }
};

export default produceErrorMessage;
