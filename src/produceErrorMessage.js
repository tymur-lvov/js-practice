const produceErrorMessage = (reason) => {
  switch (reason) {
    case '!isArgumentProvided':
      return 'Re-exports file directory name as an argument is required.';

    case '!isAnyPathname':
      return 'Target directories are empty. Nothing to re-export.';

    default:
      return 'Unexpected error occured.';
  }
};

export default produceErrorMessage;
