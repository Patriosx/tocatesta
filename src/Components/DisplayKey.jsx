import React, { useContext } from "react";
import { Context } from "../Context/StateContext";

const DisplayKey = () => {
  const { updateKeySelected, scaleSelected } = useContext(Context);
  const onUpdateKeySelected = (e) => {
    updateKeySelected(e.target.value);
  };
  return (
    <div>
      <select onChange={onUpdateKeySelected}>
        <option value="">keys</option>
        {Object.keys(scaleSelected)?.map((key, i) => {
          return (
            <option value={key} key={key}>
              {key}
            </option>
          );
        })}
      </select>

      {/* {keySelected?.map((key) => {
        return <span key={key}>{key} </span>;
      })} */}
    </div>
  );
};

export default DisplayKey;
