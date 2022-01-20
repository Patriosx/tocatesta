import React from "react";
import { useContext } from "react/cjs/react.development";
import { Context } from "../Context/StateContext";

const DisplayKey = () => {
  const { keySelected, updateKeySelected } = useContext(Context);

  return <div></div>;
};

export default DisplayKey;
