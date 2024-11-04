import { Reason, ErrorMessage } from '@types';

const produceErrorMessage = (reason: Reason): ErrorMessage => {
  switch (reason) {
    case '!dirsForIndexFile': {
      return 'Dirs for re-export as an arguments are required.';
    }
  }
};

export default produceErrorMessage;
