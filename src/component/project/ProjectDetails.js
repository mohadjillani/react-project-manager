import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectDetails(props) {
  const btnVariant = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.5 },
    },
  };
  const backVariant = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.5 },
    },
  };
  const { project } = props;

  if (project && props.auth.uid) {
    return (
      <motion.div
        className="container center"
        variants={btnVariant}
        initial="hidden"
        animate="visible"
      >
        <div className=" card z-depth-0 project-summary">
          <div className="card-content grey-text text-darken-3">
            <motion.div
              variants={backVariant}
              onClick={props.history.goBack}
              initial="hidden"
              animate="visible"
              style={{ marginTop: -6 }}
              className="left btn-floating btn-large waves-effect waves-light blue"
            >
              <i className="material-icons">reply</i>
            </motion.div>
            <span className="card-title">
              <h3>{project.title}</h3>
            </span>
            <p className="">{project.content}</p>
            <br />
            <br />
            <div className="card-action grey lighten-4">
              <p>posted by the {project.autherName}</p>
              <p>{moment(project.createat.toDate()).calendar()}</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  } else {
    return (
      <div className="container center progress">
        <div className="indeterminate blue"></div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const project = state.firestore.data.project;

  if (project) {
    return {
      project: project[id],
      auth: state.firebase.auth,
    };
  } else {
    return {
      project: null,
      auth: state.firebase.auth,
    };
  }
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "project" }])
)(ProjectDetails);
