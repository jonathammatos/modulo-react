import products from "../database.json";

export function loadProduct({ params }) {
  const product = products.find((p) => p.id === +params.productId);

  if (!product) {
    throw new Response("Produto não encontrado", { status: 404 });
  }

  return product;
}
