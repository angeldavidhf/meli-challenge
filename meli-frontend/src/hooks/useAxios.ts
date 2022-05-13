import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/';

export const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params);
      setResponse(result);
    } 
    catch( err ) {
      setError(err);
    } 
    finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(axiosParams);
  },[]);

  return { response, error, loading };
}