import { produceErrorMessage } from '@scripts';

import { Reason } from '@types';

const produceError = (reason: Reason): Error => {
  const errorMessage = produceErrorMessage(reason);

  return new Error(errorMessage);
};

export default produceError;
