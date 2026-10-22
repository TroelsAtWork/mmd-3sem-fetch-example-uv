import { Suspense } from "react";
const detailview = ({ params }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchDetailData params={params} />
    </Suspense>
  );
};

export default detailview;

async function FetchDetailData({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return <p>{data.brand}</p>;
}
