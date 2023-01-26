import React, { useContext, useState } from "react";
import { Context } from "../Context/StateContext";

const WriteProgression = () => {
  const { keySelected } = useContext(Context);
  const [progression, setProgression] = useState([]);
  const [valor, setValor] = useState(1);

  const addInterval = (e) => {
    e.preventDefault();
    setProgression([...progression, valor]);
  };
  const handleValor = (e) => {
    setValor(e.target.value);
  };
  const handleClear = () => {
    setProgression([]);
  };
  return (
    <div>
      <form action="" onSubmit={addInterval}>
        Progression:
        <input
          type="number"
          max={7}
          min={1}
          name={valor}
          onChange={handleValor}
        />
      </form>
      <button onClick={handleClear}>Clear</button>
      <p>
        Progression:
        {progression.map((interval, i) => {
          return <span>{interval}</span>;
        })}
      </p>
      <p>
        Keys:
        {progression.map((interval, i) => {
          return <span> {keySelected[interval - 1]} </span>;
        })}
      </p>
    </div>
  );
};

export default WriteProgression;
