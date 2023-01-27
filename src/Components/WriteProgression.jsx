import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context/StateContext";

const WriteProgression = () => {
  const { keySelected } = useContext(Context);
  const [progression, setProgression] = useState([]);
  const [valor, setValor] = useState(1);
  const [disableInput, setDisableInput] = useState(true);

  useEffect(() => {
    if (keySelected.length === 0) {
      handleClear();
      setDisableInput(true);
    } else {
      setDisableInput(false);
    }
  }, [keySelected]);

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
        <div className="grid">
          <div>
            <strong>Progression:</strong>
          </div>
          <div>
            <input
              type="number"
              max={7}
              min={1}
              name={valor}
              onChange={handleValor}
              disabled={disableInput}
            />
          </div>
          <div>
            <button disabled={disableInput} type="reset" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
      </form>
      <p>
        <strong>Progression:</strong>
        {progression.map((interval, i) => {
          return <span key={i}>{interval}</span>;
        })}
      </p>
      <p>
        <strong>Keys:</strong>
        {progression.map((interval, i) => {
          return <span key={i}> {keySelected[interval - 1]} </span>;
        })}
      </p>
    </div>
  );
};

export default WriteProgression;
