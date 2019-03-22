import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import cx from "classnames";

const SideBar = props => {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img
              className="img-circle"
              // src= {require('../../assets/img/ccm-logo.png')}
            />
          </div>
          <div className="pull-left info">
            <p style={{ fontSize: "1.5em" }} className="color-white">
              CCM
            </p>
          </div>
        </div>
        <Router>
          <ul className="sidebar-menu" data-widget="tree">
          
          </ul>
        </Router>
      </section>
    </aside>
  );
};

export default SideBar;
