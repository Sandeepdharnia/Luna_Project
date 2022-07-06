import "../styles/Login.scss";

const Login = () => {
  return (
    <main className="userLogin">
      <div className="userLogin__title-container">
        <h1>LOGIN</h1>
        <hr />
      </div>

      <form className="userLogin__form">
        <label>
          <input type="text" name="email" id="email" placeholder="Username" />
        </label>
        <label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
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
export default Login;
