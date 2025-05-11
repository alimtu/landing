import axiosInstance from '../../lib/axios';

export const fetcher = async url => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'An error occurred';
    throw new Error(errorMessage);
  }
};
export const postFetcher = async (url, data) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'An error occurred';
    throw new Error(errorMessage);
  }
};
export const putFetcher = async (url, data) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'An error occurred';
    throw new Error(errorMessage);
  }
};
export const deleteFetcher = async url => {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'An error occurred';
    throw new Error(errorMessage);
  }
};
