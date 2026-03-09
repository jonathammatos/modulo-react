export default function gerarSenha() {
  const caracteres =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'(/<=>?@[]^_{|}~`";

  let tamanho = Math.floor(Math.random() * 99);

  tamanho = tamanho < 8 ? 8 : tamanho;

  let password = "";

  for (let i = 0; i < tamanho; i++) {
    password += caracteres[Math.floor(Math.random() * caracteres.length)];
  }

  return password;
}
