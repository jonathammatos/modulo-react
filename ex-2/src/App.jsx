import Card from "./components/Card";
import Button from "./components/Button";

import swPosterImg from "./assets/sw-poster.jpg";
import esbPosterImg from "./assets/esb-poster.jpg";
import rotjPosterImg from "./assets/rotj-poster.jpg";

export default function App() {
  return (
    <div>
      <>
        <h2>Exercício 2</h2>
        <Button text="Ir ao blog" />
        <Card title="Pôster: Star Wars (1977)" poster={swPosterImg} />
        <Card
          title="Pôster: Empire Strikes Back (1980)"
          poster={esbPosterImg}
        />
        <Card
          title="Pôster: Return of the Jedi (1983)"
          poster={rotjPosterImg}
        />
      </>
    </div>
  );
}
