import React from "react";
import moment from "moment";
import { motion } from "framer-motion";
export default function Notification({ notifications }) {
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

  const notify = notifications ? (
    notifications.map((n) => (
      <motion.li
        key={n.id}
        variants={btnVariant}
        initial="hidden"
        animate="visible"
      >
        <span className="pink-text">{n.user}</span>&nbsp;&nbsp;
        <span>{n.content}</span>
        <div className="grey-text">{moment(n.time.toDate()).fromNow()}</div>
        <hr />
      </motion.li>
    ))
  ) : (
    <div style={{ marginTop: 100 }} className="container blue-text">
      <div className="preloader-wrapper small active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notification</span>
          <ul className="notifications">{notify}</ul>
        </div>
      </div>
    </div>
  );
}
