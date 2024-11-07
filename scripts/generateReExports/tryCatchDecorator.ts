import { IAsyncFunc } from '@types';

const errorCatchingDecorator = <T extends any[], R>(
  asyncFunc: IAsyncFunc<T, R>
): IAsyncFunc<T, R> => {
  return async (...args: T): Promise<R> => {
    try {
      return await asyncFunc(...args);
    } catch (error) {
      throw error;
    }
  };
};

export default errorCatchingDecorator;
