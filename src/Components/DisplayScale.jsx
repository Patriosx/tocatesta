import React, { useContext } from "react";
import { Context } from "../Context/StateContext";

const DisplayScale = () => {
  console.log("%c DisplayScale rendered! ", "background: #222; color: #68A357");
  const { updateScaleSelected, scales, cleanState } = useContext(Context);

  const onUpdateScaleSelected = (e) => {
    cleanState();
    if (!e.target.value) return;

    updateScaleSelected(e.target.value);
  };

  return (
    <div>
      <select onChange={onUpdateScaleSelected}>
        <option value="">scales</option>
        {Object.keys(scales)?.map((scale, i) => {
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

export default DisplayScale;
