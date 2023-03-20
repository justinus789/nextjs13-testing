async function getDetailData(id) {
  const data = await fetch(`https://dummyjson.com/products/${id}`);

  return data.json();
}

export default async function Page({ params }) {
  const products = await getDetailData(params.id);

  return <h4>{products.title}</h4>;
}
