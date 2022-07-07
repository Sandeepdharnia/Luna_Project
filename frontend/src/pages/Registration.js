import "../styles/Registration.scss";
import { useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import registrationContext from "../context/registration/RegistrationContext";
import { register_user } from "../context/registration/RegistrationActions";

const Registration = () => {
  const navigate = useNavigate();

  const { userValues, dispatch, statusCode } = useContext(registrationContext);

  const handleChange = e => {
    dispatch({ type: "ADD_EMAIL", payload: e.target.value });
  };

  const handleRegistration = async e => {
    e.preventDefault();

    const response = await register_user(userValues.email);
    dispatch({ type: "REGISTER_USER", payload: response.status });
  };

  return (
    <main className="registration">
      <div className="registration__title-container">
        <h1>REGISTRATION </h1>
        <hr />
      </div>

      {statusCode === null && (
        <form className="registration__form" onSubmit={handleRegistration}>
          <label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-Mail address"
              onChange={handleChange}
            />
          </label>
          <button
            type="submit"
            className="search-btn"
            style={{ padding: "0.6rem 1rem" }}
          >
            Register
          </button>
        </form>
      )}

      {/* Below is the message shown to the user after successful registration
          This should be shown based on a condition. If login successful, 
          show message, else we need to hide it */}

      {statusCode === 201 && (
        <div className="registration__message">
          <p>
            Thanks for your registration. Our hard working monkeys are preparing
            a digital message called E-Mail that will be sent to you soon. Since
            monkeys arent good in writing the message could end up in you junk
            folder. Our apologies for any inconvienience.
          </p>
          <button
            className="search-btn"
            onClick={() => navigate("/verification")}
          >
            Proceed
          </button>
        </div>
      )}
    </main>
  );
};
export default Registration;
