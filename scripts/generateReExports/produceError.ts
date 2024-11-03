import { Reason } from '@types';

import { produceErrorMessage } from '@scripts';

const produceError = (reason: Reason): Error => {
  const errorMessage = produceErrorMessage(reason);

  return new Error(errorMessage);
};

export default produceError;
