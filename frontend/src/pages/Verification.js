import "../styles/Verification.scss";

const Verification = () => {
  return (
    <main className="verification">
      <div className="verification__title-container">
        <h1> VERIFICATION </h1>
        <hr />
      </div>

      <form className="verification__form">
        <div className="verification__input-container">
          <label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-Mail address"
            />
          </label>
          <label>
            <input
              type="text"
              name="code"
              id="code"
              placeholder="Validation Code"
            />
          </label>
          <label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
          </label>
          <label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Location"
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </label>
          <label>
            <input
              type="password"
              name="password_repeat"
              id="password_repeat"
              placeholder="Repeat Password"
            />
          </label>
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
