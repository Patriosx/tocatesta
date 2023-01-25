import React from "react";
import { useContext } from "react/cjs/react.development";
import { Context } from "../Context/StateContext";

const DisplayKey = () => {
  const { keySelected, updateKeySelected, scaleSelected } = useContext(Context);
  console.log(scaleSelected);
  return (
    <div>
      <select name="" id="">
        <option value="">keys</option>
        {Object.keys(keySelected).map((key) => {
          return (
            <option value={key} key={key}>
              {key}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DisplayKey;
