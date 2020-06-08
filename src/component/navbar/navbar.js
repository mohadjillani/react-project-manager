import React from "react";
import { Link } from "react-router-dom";
import SigninLinks from "./signinLinks";
import SignoutLinks from "./signoutLink";
import { connect } from "react-redux";
function Navbar(props) {
  const links = props.auth.uid ? (
    <SigninLinks profile={props.profile} />
  ) : (
    <SignoutLinks />
  );
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container col s12">
        <Link to="/" className="brand-logo left">
          Project Manager
        </Link>
      </div>
      <div className="col s12">{props.auth.isLoaded && links}</div>
    </nav>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(Navbar);
