import "../styles/Registration.scss";

const Registration = () => {
  return (
    <main className="registration">
      <div className="registration__title-container">
        <h1>REGISTRATION </h1>
        <hr />
      </div>

      <form className="registration__form">
        <label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-Mail address"
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
    </main>
  );
};
export default Registration;
