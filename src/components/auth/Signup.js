import React, { useState } from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions/index";

const Signup = ({ signUp, errorMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUpClick = (e) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", password);
    signUp(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={onSignUpClick}>
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
      <button> Sign up</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
  };
};

export default connect(mapStateToProps, { signUp })(Signup);
