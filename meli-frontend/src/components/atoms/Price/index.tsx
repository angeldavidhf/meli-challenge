
import ic_Shipping from "@images/ic_Shipping.png";

export default function Price({ price, fraction, cents, size, shipping }: any) {

  return (
    <>
      <span
        className="price-tag">
        <span
          className={"price-tag-symbol" + size}
          itemProp="priceCurrency"
        >
          $
        </span>
        <span className={"price-tag-fraction" + size}>
          {fraction}
        </span>
        <span className={"price-tag-cents" + size}>{cents}</span>
      </span>
      {shipping && (
        <img
          className="free-shiping"
          src={ic_Shipping}
          width="24"
          height="24"
          alt="Free shipping"
        />
      )}
    </>
  );
}