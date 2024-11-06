import { Reason, ErrorMessage } from '@types';

const produceErrorMessage = (reason: Reason): ErrorMessage => {
  switch (reason) {
    case '': {
      return '';
    }
  }
};

export default produceErrorMessage;
