import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      {/* <!-- Main Footer --> */}
      <footer className="main-footer">
        {/* <!-- To the right --> */}
        <div className="pull-right hidden-xs">
          <strong>
            <i className=" fa fa-lock" />
            RYDE
          </strong>
          Admin
        </div>
        {/* <!-- Default to the left --> */}
        <strong>
          Copyright &copy; 2018{" "}
          <Link to="https://staging.rydecars.com/">RYDE</Link>
        </strong>{" "}
        All rights reserved.
      </footer>
    </div>
  );
};
