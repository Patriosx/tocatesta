import React from "react";
import { useContext } from "react/cjs/react.development";
import { Context } from "../Context/StateContext";

const DisplayScale = () => {
  console.log("%c DisplayScale rendered! ", "background: #222; color: #68A357");
  const { updateScaleSelected, scaleSelected, music_data } =
    useContext(Context);
  const { scales } = music_data;
  console.log(scales);
  return (
    <div>
      <select onChange={(e) => updateScaleSelected(e.target.value)}>
        <option value="">scales</option>
        {scales?.map((scale, i) => {
          return (
            <option key={i} value={Object.keys(scale)}>
              {Object.keys(scale)}
            </option>
          );
        })}
      </select>
      <span>{scaleSelected}</span>
    </div>
  );
};

export default DisplayScale;
