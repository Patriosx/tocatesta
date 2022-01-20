import React, { useReducer } from "react";
import ContextReducer from "./Reducer";
import { createContext } from "react";

export const Context = createContext();

const StateContext = (props) => {
  const initialState = {
    music_data: [],
    scaleSelected: "",
    progressionSelected: "",
    keySelected: "",
  };
  const [state, dispatch] = useReducer(ContextReducer, initialState);

  const getMusicData = async (data) => {
    console.log("data", data);
    dispatch({
      type: "GET_MUSICDATA",
      payload: data,
    });
  };

  const updateScaleSelected = (scale) => {
    dispatch({
      type: "SCALE_SELECTED",
      payload: scale,
    });
  };
  const updateKeySelected = (key) => {
    dispatch({
      type: "KEY_SELECTED",
      payload: key,
    });
  };
  return (
    <Context.Provider
      value={{
        music_data: state.music_data,
        scaleSelected: state.scaleSelected,
        progressionSelected: state.progressionSelected,
        keySelected: state.keySelected,
        getMusicData,
        updateScaleSelected,
        updateKeySelected,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default StateContext;
