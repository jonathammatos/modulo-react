import PropTypes from "prop-types";

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function Input({
  type,
  id,
  label,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
