import Item from "@molecules/Item";

export default function ListItems({ items }: any) {

  if (items.length === 0) {
    return (
      <div className="center">
        <h2>No found items.</h2>
      </div>
    );
  }

  return (
    <>
      {items.map((item: any, i: number) => {
        return <Item key={i} properties={item} />;
      })}
    </>
  );
}