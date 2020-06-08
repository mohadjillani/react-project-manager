import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../reducers/actions/authAction";
import { connect } from "react-redux";

function SigninLinks(props) {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li onClick={props.signOut}>
        <a>Sign out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {props.profile.initial}
        </NavLink>
      </li>
    </ul>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(null, mapDispatchToProps)(SigninLinks);
