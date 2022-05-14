import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/';

// THIS HOOK WAS MADE FOR QUERIES DEPENDING ON THE PARAMETERS, USE AN AXIOS OWN INTERFACE AND RETURN response, loading AND error
export const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (params: AxiosRequestConfig) => {
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
    }

    fetchData(axiosParams);
	}, [axiosParams.url]); 

  return { response, error, loading };
}