import { useState } from "react";
import Input from "../TextInput";
import Button from "../Button";
import Comment from "../Comments";
import useCommentary from "../../hooks/useCommentary";

export default function FormularioComentarios() {
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");
  const { comments, addComment } = useCommentary();

  const handleSubmit = (ev) => {
    ev.preventDefault();

    addComment({ author: email, content: comentario });
    setEmail("");
    setComentario("");
  };

  return (
    <div id="app">
      <form className="app" onSubmit={handleSubmit}>
        <h1>Seção de Comentários</h1>

        <Input
          type="email"
          id="email-usuario"
          label="Email"
          placeholder="exemplo@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="coment">Comentário</label>
        <textarea
          id="content"
          label="Seu Comentário"
          placeholder="Escreva aqui..."
          rows={6}
          cols={40}
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        ></textarea>

        <Button type="submit" value="Enviar Comentário" />
      </form>

      <section className="comentarios">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Comment
              key={comment.id}
              author={comment.author}
              createdAt={comment.createdAt}
              content={comment.content}
            />
          ))
        ) : (
          <p>Seja o primeiro a comentar!</p>
        )}
      </section>
    </div>
  );
}
