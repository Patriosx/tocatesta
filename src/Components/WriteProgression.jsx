/* eslint-disable jsx-a11y/anchor-is-valid */
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
      <details>
        <summary>Create a Progression</summary>

        <form action="" onSubmit={addInterval}>
          <div>
            <strong>Add Intervals:</strong>
          </div>
          <div className="container-writeprog">
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
              <a
                href="#"
                role={"button"}
                class="primary btn"
                disabled={disableInput}
                type="reset"
                onClick={addInterval}
              >
                Add
              </a>
            </div>
            <div>
              <a
                href="#"
                role="button"
                class="secondary btn"
                disabled={disableInput}
                type="reset"
                onClick={handleClear}
              >
                Reset
              </a>
            </div>
          </div>
        </form>
        <div>
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
      </details>
    </div>
  );
};

export default WriteProgression;
