import dompurify from "dompurify";

import Price from "@atoms/Price";

export default function ProductDetail({ product }: any) {

  // DOMPURIFY USE A STRING OF DIRTY HTML AND IT WILL RETURN A STRING WITH CLEAN HTML
  const sanitizer = dompurify.sanitize;

  return (
    <>
      <div className="product-detail">
        <div className="product-detail__content">
          <div className="product-detail__info">
            <div className="product-detail__img">
              <img
                aria-hidden
                src={
                  product.pictures.length > 0
                    ? product.pictures[0].secure_url
                    : ""
                }
                alt={product.title + "image"}
                width="auto"
                height="auto"
              />
            </div>
            <h2>Descripción del producto</h2>
            <p 
              className="product-detail__description"
              dangerouslySetInnerHTML={{
                __html: sanitizer(product.description.plain_text),
              }}
            ></p>
          </div>
          <div className="product-detail__price">
            <span className="product-detail__available-quantity">
              {product.condition} - {product.sold_quantity}{" "}
              Vendidos
            </span>
            <h1>{product.title}</h1>
            <Price
              price={product.price}
              fraction={product.price}
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
    </>
  );
}