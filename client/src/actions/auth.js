import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

//action creator for signin
export const signin = (formData, navigate) => async (dispatch) => {
  try {
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

//action creator for signup
export const signup = (formData, navigate) => async (dispatch) => {
  try {
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
