import useSWR from 'swr';
import { fetcher, postFetcher, putFetcher, deleteFetcher } from '../lib/swr/fetcher';

export const useGet = (url, options = {}) => {
  return useSWR(url, fetcher, options);
};

export const usePost = (url, data, options = {}) => {
  return useSWR([url, data], ([url, data]) => postFetcher(url, data), options);
};

export const usePut = (url, data, options = {}) => {
  return useSWR([url, data], ([url, data]) => putFetcher(url, data), options);
};

export const useDelete = (url, options = {}) => {
  return useSWR(url, deleteFetcher, options);
};
