import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>This page cannot found</p>
      <Link to="/">Back to the HomePage...</Link>
    </div>
  );
};

export default NotFound;
