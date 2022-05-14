import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAxios } from '@hooks/useAxios';

import Breadcrumb from '@molecules/Breadcrumb';
import Loading from '@organisms/Loading';
import ProductList from '@organisms/ProductList';

export default function SearchResult() {
  const [ q ] = useSearchParams();
  const [ products, setProducts ] = useState();
  const [ categories, setCategories ] = useState();

  // HOOK TO OBTAIN THE LIST OF PRODUCTS ACCORDING TO OBTAINED IN THE URL QUERY
  const { response, loading, error } = useAxios({
    method: "GET",
    url: `/items?q=${q.get("search")}`,
    headers: {
      accept: '*/*'
    }
  });

  //SET THE STATE EVERY TIME THE RESPONSE OF THE PRODUCTS LIST CHANGES
  useEffect(() => {
    setProducts(response?.data?.items || []);
    setCategories(response?.data?.filters || []);
  }, [response, loading]);

  return (
    <>
      {loading && (
        <div className="center">
          <Loading />
        </div>
      )}
      {!loading && products && (
        <>
          <Breadcrumb categories={categories} />
          <div className="search-container">
            <ProductList products={products}/>
          </div>
        </>
      )}      
    </>
  );
}