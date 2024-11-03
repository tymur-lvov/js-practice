import { AsyncFn } from '@types';

const errorCatchingDecorator = <T extends any[], R>(asyncFn: AsyncFn<T, R>): AsyncFn<T, R> => {
  return async (...args: T): Promise<R> => {
    try {
      return await asyncFn(...args);
    } catch (error) {
      throw error;
    }
  };
};

export default errorCatchingDecorator;
