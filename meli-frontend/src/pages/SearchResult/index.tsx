import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAxios } from '@hooks/useAxios';

import Breadcrumb from '@molecules/Breadcrumb';
import Loading from '@organisms/Loading';
import ListItems from '@organisms/ListItems';

export default function SearchResult() {
  const [ q ] = useSearchParams();
  const [ itemsResult, setItemsResult ] = useState();

  const { response, loading, error } = useAxios({
    method: "GET",
    url: `/items?q=${q.get("search")}`,
    headers: {
      accept: '*/*'
    }
  });

  useEffect(() => {
    setItemsResult(response?.data?.items || []);
  }, [response, loading]);

  return (
    <>
      {loading && (
        <div className="center">
          <Loading />
        </div>
      )}
      {!loading && itemsResult && (
        <>
          <Breadcrumb />
          <div className="search-container">
            <ListItems items={itemsResult}/>
          </div>
        </>
      )}      
    </>
  );
}