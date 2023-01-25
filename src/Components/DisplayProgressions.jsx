import React from "react";
import { useContext } from "react/cjs/react.development";
import { Context } from "../Context/StateContext";

const DisplayProgressions = () => {
  const { scaleSelected, updateProgressionSelected, progressions } =
    useContext(Context);
  return (
    <div>
      <select>
        <option value="">progressions</option>
        {Object.keys(progressions)?.map((scale, i) => {
          return (
            <option key={i} value={scale}>
              {scale}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DisplayProgressions;
