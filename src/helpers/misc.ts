import config from '@config';

import { indexFileName, typesIndexFileName } from '@constants';

import { findErrorMessage } from '@helpers';

import type {
  ICreateError,
  IGetConfigOption,
  IGetIndexFileName,
  IGetEmptyStringPromise,
  IGetTypesIndexFileName,
} from '@types';

export const getConfigOption: IGetConfigOption = (option) => {
  return config[option];
};

export const getIndexFileName: IGetIndexFileName = () => {
  return indexFileName;
};

export const getTypesIndexFileName: IGetTypesIndexFileName = () => {
  return typesIndexFileName;
};

export const getEmptyStringPromise: IGetEmptyStringPromise = async () => {
  return Promise.resolve('');
};

export const createError: ICreateError = (reason) => {
  const message = findErrorMessage(reason);

  return new Error(message);
};
