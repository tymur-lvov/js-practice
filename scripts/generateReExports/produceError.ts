import { Reason } from '@types';

import { produceErrorMessage } from '@scripts';

const produceError = (reason: Reason): Error => new Error(produceErrorMessage(reason));

export default produceError;
