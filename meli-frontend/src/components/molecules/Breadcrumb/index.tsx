
export default function Breadcrumb({ categories }: any) {
  let categoriesBreadCrumb = "";

  // RECIVE ARRAY WITH POSIBLES CATEGORIES IF THIS ARRAY IS EMPTY PRINT ONE CATEGORY
  if (categories && categories.length > 0) {
    categories.map((item: any) => {
      if (item?.values?.length > 0) {
        item.values.map((val: any) => {
          if (val?.name) {
            return (categoriesBreadCrumb += `${val?.name} > `);
          } 
          else {
            return (categoriesBreadCrumb += `${val} > `);
          }
        });
      } 
      else {
        return (categoriesBreadCrumb += `${item} > `);
      }
    });
  }

  return (
    <>
      <div className="breadcrumb">
        <span>{categoriesBreadCrumb.slice(0, -1)}</span>
      </div>
    </>
  );
}