import React, { useReducer } from "react";
import ContextReducer from "./Reducer";
import { createContext } from "react";
import music_data from "../Server/db.json";
export const Context = createContext();

const StateContext = (props) => {
  const initialState = {
    music_data: music_data.music_data,
    scales: music_data.music_data.scales,
    progressions: music_data.music_data.progressions,
    scaleSelected: {},
    progressionSelected: {},
    keySelected: {},
  };
  const [state, dispatch] = useReducer(ContextReducer, initialState);

  const getMusicData = async (data) => {
    // console.log("data", data);
    // console.log(music_data);
    /*
    dispatch({
      type: "GET_MUSICDATA",
      payload: data, //music_data
    });
    */
  };

  const cleanState = () => {
    dispatch({
      type: "CLEAN_STATE",
      payload: initialState,
    });
  };
  const updateScaleSelected = (scale) => {
    const fullScale = state.music_data.scales[scale];
    //scaleSelected: scala completa con sus 7 notas
    dispatch({
      type: "SCALE_SELECTED",
      payload: fullScale,
    });
  };
  const updateKeySelected = (key) => {
    dispatch({
      type: "KEY_SELECTED",
      payload: key,
    });
  };
  const updateProgressionSelected = (progression) => {
    dispatch({
      type: "PROGRESSION_SELECTED",
      payload: progression,
    });
  };

  return (
    <Context.Provider
      value={{
        music_data: state.music_data,
        scales: state.scales,
        progressions: state.progressions,
        scaleSelected: state.scaleSelected,
        progressionSelected: state.progressionSelected,
        keySelected: state.keySelected,
        getMusicData,
        cleanState,
        updateScaleSelected,
        updateKeySelected,
        updateProgressionSelected,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default StateContext;
