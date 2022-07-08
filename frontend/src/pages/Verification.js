import "../styles/Verification.scss";
import InputField from "../components/InputField";
import inputs from "../InputFieldsVerification";
import {useContext, useState} from "react";
import registrationContext from "../context/registration/RegistrationContext";
import {ACTIONS} from "../context/registration/RegistrationReducer";
import {verify_user} from "../context/registration/RegistrationActions";

const Verification = () => {
  const { userValues, dispatch } = useContext(registrationContext)

  const handleChange = (e) => {
      dispatch({ type: ACTIONS.VALIDATE_USER, payload: e})
  };
console.log(userValues)

   const handleSubmit = async (e) => {
        e.preventDefault()
       const response = await verify_user(userValues)
        dispatch({ type: ACTIONS.VERIFY_USER, payload: response.status})
   }

  return (
    <main className="verification">
      <div className="verification__title-container">
        <h1> VERIFICATION </h1>
        <hr />
      </div>

      <form className="verification__form" onSubmit={handleSubmit}>
        <div className="verification__input-container">
          {inputs.map(input => (
            <InputField
              key={input.id}
              {...input}
              value={userValues[input.name]}
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
