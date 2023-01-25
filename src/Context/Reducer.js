export default function reducer(state, action) {
  switch (action.type) {
    case "GET_MUSICDATA":
      return {
        ...state,
        music_data: action.payload,
      };
    case "CLEAN_STATE":
      return action.payload;

    case "SCALE_SELECTED":
      return {
        ...state,
        scaleSelected: action.payload,
      };
    case "KEY_SELECTED":
      return {
        ...state,
        keySelected: action.payload,
      };
    case "PROGRESSION_SELECTED":
      return {
        ...state,
        progressionSelected: action.payload,
      };

    default:
      return state;
  }
}
