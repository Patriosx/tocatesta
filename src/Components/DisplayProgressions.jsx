import React from "react";
import { useContext } from "react/cjs/react.development";
import { Context } from "../Context/StateContext";

const DisplayProgressions = () => {
  const {
    updateStyleSelected,
    updateProgressionSelected,
    styleSelected,
    progressions,
    keySelected,
  } = useContext(Context);

  const onUpdateStyleSelected = (e) => {
    updateStyleSelected(e.target.value);
  };
  const onUpdateProgressionSelected = (e) => {
    updateProgressionSelected(e.target.value);
  };
  const renderProgressions = (arr) => {
    let aux = "";

    arr.forEach((compas) => {
      if (!isNaN(compas)) {
        aux += " / " + compas + " / ";
      } else {
        aux += "[";
        compas.forEach((el) => {
          aux += el + " - ";
        });
        aux += "]";
      }
    });

    const reg1 = /(^ \/)|(\/ $)/gm; //elimina "/" inicial y final
    const reg2 = /(\/ {2}\/)/gm; //elimina 2 "/" seguidas
    const reg3 = / - ]/gm;
    const reg4 = /\]\[/gm;
    aux = aux
      .replaceAll(reg1, "")
      .replaceAll(reg2, "/")
      .replaceAll(reg3, "]")
      .replaceAll(reg4, "] / [");
    return aux;
  };
  return (
    <div>
      <div>
        <select onChange={onUpdateStyleSelected}>
          <option value="">style</option>
          {keySelected.length !== 0
            ? Object.keys(progressions)?.map((style) => {
                return (
                  <option key={style} value={style}>
                    {style}
                  </option>
                );
              })
            : null}
        </select>
      </div>
      <div>
        <select onChange={onUpdateProgressionSelected}>
          <option value="">progressions</option>
          {progressions[styleSelected]?.map((prog, i) => {
            return (
              <option key={i} value={prog}>
                {renderProgressions(prog)}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default DisplayProgressions;
