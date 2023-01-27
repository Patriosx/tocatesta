import React, { useContext } from "react";
import { Context } from "../Context/StateContext";

const DisplayHarmony = () => {
  const { progressionSelected, keySelected } = useContext(Context);
  return (
    <div>
      <div>
        <strong>Scale: </strong>

        {keySelected?.map((key) => {
          return <span key={key}>{key} </span>;
        })}
      </div>
      <div>
        <strong>Progression: </strong>
        <span>{progressionSelected}</span>
      </div>
      <div>
        <h4>
          {progressionSelected?.map((interval, i) => {
            return <span key={i}>{keySelected[interval - 1]} </span>;
          })}
        </h4>
      </div>
    </div>
  );
};

export default DisplayHarmony;
