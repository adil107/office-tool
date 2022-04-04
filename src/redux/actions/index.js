/* eslint-disable no-unused-expressions */
import { store } from "redux/store";
import axios from "utils/axios";
import { my_companies } from "utils/endpoints";
import {
  LOGIN,
  LOGOUT,
  MY_COMPANY,
  SELECTED_COMPANY,
  UPDATE_USER_PROFILE_DATA,
} from "../constants";

// Login
export const authAction = (token, userData) => {
  localStorage.setItem("authToken", JSON.stringify(token));
  localStorage.setItem("userData", JSON.stringify(userData));

  return {
    type: LOGIN,
    payload: { token, userData },
  };
};

// My Company
export const fetchMyCompany = () => async (dispatch) => {
  const { auth } = store.getState();
  const res = await axios.post(my_companies, {
    token: "demo",
    userToken: auth.token,
  });
  if (res.data.error === 0) {
    dispatch({
      type: MY_COMPANY,
      payload: { myCompanies: res.data.companies },
    });
  }
};

// selectedCompany
export const selectedCompany = (selectedCompanyData) => {
  return {
    type: SELECTED_COMPANY,
    payload: { selectedCompanyData },
  };
};
// user Profile Update
export const updateUserProfile = (userUpdateData) => {
  localStorage.setItem("userData", JSON.stringify(userUpdateData));
  return {
    type: UPDATE_USER_PROFILE_DATA,
    payload: { userUpdateData },
  };
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("authToken");

  return {
    type: LOGOUT,
  };
};
