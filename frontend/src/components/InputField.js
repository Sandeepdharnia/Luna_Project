import "../styles/InputField.scss";

const InputField = ({ handleChange, ...inputProps }) => {
  return (
    <label>
      <input className="input" {...inputProps} onChange={handleChange} />
    </label>
  );
};
export default InputField;
