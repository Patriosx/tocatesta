import React from "react";

const PageWrapper = (props) => {
  return <main className="container">{props.children}</main>;
};

export default PageWrapper;
