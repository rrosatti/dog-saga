import * as types from '../constants/ActionTypes';

const initialState = {
  fetching: false,
  dog: null,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case types.API_CALL_SUCCESS:
      return { ...state, fetching: false, dog: action.dog };
    case types.API_CALL_FAILURE:
      return { ...state, fetching:false, dog: null, error: action.error };
    default:
      return state;
  }
};

//export default rootReducer;
