
import ic_Shipping from "@images/ic_Shipping.png";

export default function Price({ price, fraction, cents, size, shipping }: any) {

  // FORMAT NUMBER ON CURRENCY WITH DECIMALS OR UNITS
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  return (
    <>
      <span
        className="price-tag">
        <span
          className={"price-tag-symbol" + size}
          itemProp="priceCurrency"
        >
        </span>
        <span className={"price-tag-fraction" + size}>
          {formatter.format(fraction)}
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