import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dompurify from "dompurify";

import { useAxios } from '@hooks/useAxios';

import Loading from "@organisms/Loading";
import Breadcrumb from "@molecules/Breadcrumb";
import Price from "@atoms/Price";

export default function ItemDetail() {
  const { id } = useParams();
  const [ itemResult, setItemResult ] = useState<any>(null);
  const sanitizer = dompurify.sanitize;

  const { response, loading, error } = useAxios({
    method: "GET",
    url: `/items/${id}`,
    headers: {
      accept: '*/*'
    }
  });

  useEffect(() => {
    setItemResult(response?.data?.item);
  }, [response, loading]);


  return (
    <>
      {loading && (
        <div className="center">
          <Loading />
        </div>
      )}
      {!loading && itemResult && (
        <div className="container">
          <div className="product-detail">
            <Breadcrumb />
            <div className="product-detail__content">
              <div className="product-detail__info">
                <div className="product-detail__img">
                  <img
                    aria-hidden
                    src={
                      itemResult.pictures.length > 0
                        ? itemResult.pictures[0].secure_url
                        : ""
                    }
                    alt={itemResult.title + "image"}
                    width="auto"
                    height="auto"
                  />
                </div>
                <h2>Descripción del producto</h2>
                <p
                  className="product-detail__description"
                  dangerouslySetInnerHTML={{
                    __html: sanitizer(itemResult.description.plain_text),
                  }}
                ></p>
              </div>
              <div className="product-detail__price">
                <span className="product-detail__available-quantity">
                  {itemResult.condition} - {itemResult.sold_quantity}{" "}
                  Vendidos
                </span>
                <h1>{itemResult.title}</h1>
                <Price
                  price={itemResult.price}
                  fraction={itemResult.price}
                  cents={"00"}
                  size="-lg"
                />
                <button
                  type="submit"
                  className="product-detail__price-button"
                  aria-disabled="false"
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}