import { Suspense } from "react";
import Link from "next/link";
import Card from "@/components/Card";

export default async function Home() {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Suspense fallback={<div>Loading...</div>}>
        <FetchData />
      </Suspense>
    </div>
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

  return data.products.map((item) => (
    <Link href={`/detailview/${item.id}`} key={item.id}>
      <Card img={item.images[0]} heading={item.title} />
    </Link>
  ));
};
