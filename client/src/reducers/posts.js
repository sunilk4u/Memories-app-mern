import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE_POST,
  FETCH_SEARCH,
} from "../constants/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_SEARCH:
      return { ...state, posts: action.payload };
    case CREATE:
      return [...state, action.payload];
    case LIKE_POST:
    case UPDATE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};
