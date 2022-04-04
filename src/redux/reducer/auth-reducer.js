import {
  LOGIN,
  LOGOUT,
  MY_COMPANY,
  SELECTED_COMPANY,
  UPDATE_TOKEN,
  UPDATE_USER_PROFILE_DATA,
} from "../constants";

const initState = {
  token: JSON.parse(localStorage.getItem("authToken")) || null,
  userData: JSON.parse(localStorage.getItem("userData")) || {},
  myCompanyList: {},
};

export const authReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        token: payload?.token,
        userData: { ...payload?.userData },
      };
    case MY_COMPANY:
      return {
        ...state,
        myCompanyList: { ...payload?.myCompanies },
      };
    case SELECTED_COMPANY:
      const temp = {
        ...state.userData,
        selectedCompanyData: { ...payload?.selectedCompanyData },
      };
      localStorage.setItem("userData", JSON.stringify({ ...temp }));
      return {
        ...state,
        userData: { ...temp },
      };
    case UPDATE_TOKEN:
      return {
        ...state,
        token: payload?.token,
      };
    case UPDATE_USER_PROFILE_DATA:
      return {
        ...state,
        userData: { ...payload?.userUpdateData },
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        userData: {},
        myCompanyList: {},
      };
    default:
      return state;
  }
};
