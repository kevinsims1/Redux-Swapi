import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR
} from "../actions";
const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  error: '',
  isLoading: false,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        error: '',
        isLoading: true
      }
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        isLoading:false,
        characters: action.payload
      }
    case FETCH_CHARACTERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: 'DID NOT LOAD CHECK THE CODE'
      }
    default:
      return state;
  }
};
