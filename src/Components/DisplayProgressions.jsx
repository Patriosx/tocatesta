import React from "react";
import { useContext } from "react/cjs/react.development";
import { Context } from "../Context/StateContext";

const DisplayProgressions = () => {
  const {
    updateStyleSelected,
    updateProgressionSelected,
    styleSelected,
    progressions,
  } = useContext(Context);

  const onUpdateStyleSelected = (e) => {
    updateStyleSelected(e.target.value);
  };
  const onUpdateProgressionSelected = (e) => {
    updateProgressionSelected(e.target.value);
  };
  return (
    <div>
      <div>
        <select onChange={onUpdateStyleSelected}>
          <option value="">style</option>
          {Object.keys(progressions)?.map((style, i) => {
            return (
              <option key={style} value={style}>
                {style}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <select onChange={onUpdateProgressionSelected}>
          <option value="">progressions</option>
          {progressions[styleSelected]?.map((prog, i) => {
            return (
              <option key={i} value={prog}>
                {prog}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default DisplayProgressions;
