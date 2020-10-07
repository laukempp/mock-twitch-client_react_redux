import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions/index";

const Header = ({ signOut, authenticated }) => {
  console.log(signOut);
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Twitcher
      </Link>
      <div className="right menu">
        <Link to="/" className="right menu">
          All streams
        </Link>
        {!authenticated ? (
          <div>
            <div>
              <Link to="/signup" className="right menu">
                Sign up
              </Link>
            </div>
            <div>
              <Link to="/signin" className="right menu">
                Sign in
              </Link>
            </div>
          </div>
        ) : (
          <div className="right menu" onClick={signOut}>
            Sign out
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
  };
};

export default connect(mapStateToProps, { signOut })(Header);
