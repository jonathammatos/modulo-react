import PropTypes from "prop-types";

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  createAt: PropTypes.instanceOf(Date).isRequired,
  content: PropTypes.string.isRequired,
};

export default function Comment({ id, author, createdAt, content }) {
  return (
    <div key={id}>
      <h3>{author}</h3>
      <span>Em {createdAt?.toLocaleDateString()}</span>
      <p>{content}</p>
    </div>
  );
}
