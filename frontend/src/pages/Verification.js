import "../styles/Verification.scss";
import InputField from "../components/InputField";
import inputs from "../InputFieldsVerification";
import { useState } from "react";

const Verification = () => {
  const [values, setValues] = useState({
    email: "",
    code: "",
    username: "",
    location: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <main className="verification">
      <div className="verification__title-container">
        <h1> VERIFICATION </h1>
        <hr />
      </div>

      <form className="verification__form">
        <div className="verification__input-container">
          {inputs.map(input => (
            <InputField
              key={input.id}
              {...input}
              value={values[input.name]}
              handleChange={handleChange}
            />
          ))}
        </div>
        <button
          type="submit"
          className="search-btn"
          style={{ padding: "0.6rem 1rem", width: "200px" }}
        >
          Finish Registration
        </button>
      </form>
    </main>
  );
};
export default Verification;
