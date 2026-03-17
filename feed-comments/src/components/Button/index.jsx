import PropTypes from "prop-types";

PropTypes.Button = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default function Button({ type, value }) {
  return <input type={type} value={value} />;
}
