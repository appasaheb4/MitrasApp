import {
  GET_RESULT,
  GET_WITH_PARA_RESULT,
  POST_RESULT,
  UPDATE_RESULT,
  DELETE_RESULT,
} from '../actions/common';

const initialState = {
  getRes: {},
  getWithParaRes: {},
  postRes: {},
  updateRes: {},
  deleteRes: {},
};

export default (state = initialState, action: any) => {
  console.log({state, action});

  switch (action.type) {
    case GET_RESULT:
      return {
        ...state,
        payload: action.payload,
      };

    case GET_WITH_PARA_RESULT:
      return {
        ...state,
        payload: action.payload.getWithParaRes,
      };

    case POST_RESULT:
      return {
        ...state,
        payload: action.payload.postRes,
      };

    case UPDATE_RESULT:
      return {
        ...state,
        payload: action.payload.updateRes,
      };

    case DELETE_RESULT:
      return {
        ...state,
        payload: action.payload.deleteRes,
      };
    default:
      return state;
  }
};
