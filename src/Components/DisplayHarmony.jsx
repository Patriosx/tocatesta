import React, { useContext } from "react";
import { Context } from "../Context/StateContext";

const DisplayHarmony = () => {
  const { progressionSelected, keySelected } = useContext(Context);
  return (
    <div>
      <div>
        Scale:
        {keySelected?.map((key) => {
          return <span key={key}>{key} </span>;
        })}
      </div>
      <div>progression: {progressionSelected}</div>
      <div>
        {progressionSelected?.map((interval, i) => {
          return <span key={i}>{keySelected[interval - 1]} </span>;
        })}
      </div>
    </div>
  );
};

export default DisplayHarmony;
