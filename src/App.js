import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import Deshboard from "./component/dashboard/dashboard";
import ProjectDetails from "./component/project/ProjectDetails";
import Signin from "./component/auth/Signin";
import Signup from "./component/auth/Signup";
import CreateProject from "./component/project/CreateProject";
import { connect } from "react-redux";

function App(props) {
  if (props.isLoaded) {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Deshboard}></Route>
            <Route path="/project/:id" component={ProjectDetails}></Route>
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  } else {
    return (
      <div style={{ marginTop: 100 }} className="container blue-text center">
        <div className="progress">
          <div className="indeterminate blue"></div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoaded: state.firebase.auth.isLoaded,
  };
};
export default connect(mapStateToProps)(App);
