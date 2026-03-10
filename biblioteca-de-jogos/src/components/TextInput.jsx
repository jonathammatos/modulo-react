import PropTypes from "prop-types";

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default function TextInput({ id, label, value, onChange }) {
  return (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <label htmlFor={id}>{label}</label>
      <input type="text" name={id} id={id} value={value} onChange={onChange} />
    </div>
  );
}
