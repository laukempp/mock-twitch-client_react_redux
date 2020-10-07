import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../../actions/index";

const Signin = ({ signIn, errorMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignInClick = (e) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", password);
    signIn(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={onSignInClick}>
      <fieldset>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </fieldset>
      {errorMessage ? <div>{errorMessage}</div> : null}
      <button> Sign in</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
  };
};

export default connect(mapStateToProps, { signIn })(Signin);
