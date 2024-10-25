const produceErrorMessage = (reason) => {
  switch (reason) {
    case '!isArgumentProvided':
      return 'Source file path is required. Nowhere to re-export.';

    case '!isAnyPath':
      return 'Target directories are empty. Nothing to re-export.';

    default:
      return 'Unexpected error occured.';
  }
};

export default produceErrorMessage;
