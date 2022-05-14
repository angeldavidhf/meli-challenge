import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAxios } from '@hooks/useAxios';

import Breadcrumb from "@molecules/Breadcrumb";
import Loading from "@organisms/Loading";
import ProductDetail from "@organisms/ProductDetail";

export default function ProductResult() {
  const { id } = useParams();
  const [ product, setProduct ] = useState(null);
  const [ category, setCategory ] = useState(null);


  // HOOK TO OBTAIN THE DETAIL OF PRODUCT ACCORDING TO URL ID
  const { response, loading, error } = useAxios({
    method: "GET",
    url: `/items/${id}`,
    headers: {
      accept: '*/*'
    }
  });

  //SET THE STATE EVERY TIME THE RESPONSE OF THE PRODUCTS LIST CHANGES
  useEffect(() => {
    setProduct(response?.data?.item);
    setCategory(response?.data?.item?.category_id);
  }, [response, loading]);


  return (
    <>
      {loading && (
        <div className="center">
          <Loading />
        </div>
      )}
      {!loading && product && (
        <div className="container">
          <Breadcrumb categories={[category]} />
          <ProductDetail product={product} />
        </div>
      )}
    </>
  );
}