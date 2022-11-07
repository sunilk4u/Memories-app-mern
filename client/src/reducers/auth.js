import {
    FETCH_ALL,
    CREATE,
    UPDATE,
    DELETE,
    LIKE_POST,
  } from "../constants/actionTypes";
  
  export default (auth = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload;
      default:
        return auth;
    }
  };