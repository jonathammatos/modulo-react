import { Link, useLoaderData } from "react-router-dom";

export default function Product() {
  const product = useLoaderData();

  return (
    <section>
      <Link to="/products">
        <button>Voltar</button>
      </Link>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>R$ {product.price.toFixed(2)}</p>
      <button>Comprar</button>
    </section>
  );
}
