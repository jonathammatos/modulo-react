import { useState } from "react";

function App() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author,
      content,
      createdAt: new Date(),
    };
    setComments((state) => [newComment, ...state]);
    setAuthor("");
    setContent("");
  };

  return (
    <div id="app">
      <h2>Seção de Comentários</h2>
      <form className="app" onSubmit={handleSubmit}>
        <label htmlFor="author">Email</label>
        <input
          type="email"
          name=""
          id="author"
          placeholder="exemple@email.com"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label htmlFor="content">Comentário</label>
        <textarea
          name=""
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <input type="submit" value="Enviar comentário" />
      </form>

      <section id="comments">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id}>
              <h3>{comment.author}</h3>
              <span>Em {comment.createdAt.toLocaleDateString()}</span>
              <p>{comment.content}</p>
            </div>
          ))
        ) : (
          <p>Seja o primeiro a comentar!</p>
        )}
      </section>
    </div>
  );
}

export default App;
