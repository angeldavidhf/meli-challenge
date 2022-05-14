import { Link } from "react-router-dom";

import Price from "@atoms/Price";

export default function ListRow({ properties }: any) {
  return (
    <div className="search-item">
      <div className="search-item__img">
        <img
          aria-hidden
          src={properties.thumbnail}
          width="180"
          height="auto"
          alt={properties.title + "image"}
        />
      </div>
      <div className="search-item__detail">
        <Price
          price={
            properties.prices.prices.length > 0
              ? properties.prices.prices[0].amount
              : ""
          }
          fraction={
            properties.prices.prices.length > 0
              ? properties.prices.prices[0].amount
              : ""
          }
          cents={"00"}
          size="-sm"
          shipping={properties.shipping.free_shipping}
        />        
        <Link
          to={`/items/${properties.id}`}
          className="search-item__detail-link"
        >
          <h2 className="search-item__detail-title">
            {properties.title}
          </h2>
        </Link>
      </div>
      <div className="search-item__location">
        <span>{properties.address.state_name}</span>
      </div>
    </div>
  );
}