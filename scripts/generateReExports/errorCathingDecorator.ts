import { AsyncFn, DecoratedFn } from '@types';

const errorCatchingDecorator = <T extends any[], R>(callback: AsyncFn<T, R>): DecoratedFn<T, R> => {
  return async (...args: T): Promise<R> => {
    try {
      return await callback(...args);
    } catch (error) {
      throw error;
    }
  };
};

export default errorCatchingDecorator;
