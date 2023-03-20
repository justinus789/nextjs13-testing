import Link from "next/link";

async function fetchData() {
  const data = await fetch("https://dummyjson.com/products?limit=5");
  return data.json();
}

export default async function About() {
  const { products } = await fetchData();
  return products.map((products) => (
    <div key={products.id}>
      <Link href={`/about/${products.id}`}>{products.title}</Link>
      <p>{products.description}</p>
    </div>
  ));
}
