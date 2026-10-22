import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchData />
    </Suspense>
  );
}

const FetchData = async () => {
  const response = await fetch("https://dummyjson.com/products", {
    // headers er som eksempel på hvordan I skal medsende
    // jeres API key, i familyfriends
    // (se filen .env for at indsætte jeres egne api key)
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });
  const data = await response.json();
  return data.products.map((product, index) => (
    <div key={index}>
      <Image src={product.images[0]} width={500} height={500} alt="billede" />
      <div>{product.brand}</div>
    </div>
  ));
};
