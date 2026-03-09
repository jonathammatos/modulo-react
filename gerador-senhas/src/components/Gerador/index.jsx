import Button from "../Button";

import styles from "./styles.module.css";

import { useState } from "react";
import handlerGerar from "../../js/gerarSenha.js";

export default function Gerador() {
  const [senha, setSenha] = useState("");
  const [copiado, setCopiado] = useState(false);

  const gerada = () => {
    const resultado = handlerGerar();
    setSenha(resultado);
    setCopiado(false);
  };

  const handleCopiar = () => {
    navigator.clipboard.writeText(senha);
    setCopiado(true);
    alert(senha);
  };

  return (
    <div className={styles.gerador}>
      <h1>Gerador de Senhas</h1>

      <div className={styles.bottons}>
        <Button text="Gerar" classe="gerar" onClick={gerada} />
        <Button
          text={copiado ? "Copiado" : "Copiar"}
          className="copiar"
          onClick={handleCopiar}
        />
      </div>

      <div className={styles.senha} style={{ color: "#fff" }}>
        {senha}
      </div>
    </div>
  );
}
