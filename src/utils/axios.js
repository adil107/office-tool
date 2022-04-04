import axios from "axios";
import { createNotification } from "common/create-notification";

axios.defaults.baseURL = "https://bi.bignest.com/api/";

axios.interceptors.request.use(
  (successfulReq) => {
    axios.defaults.headers.post["Content-Type"] =
      "application/application/json";

    return successfulReq;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (successRes) => {
    return successRes;
  },
  (error) => {
    if (error.response)
      createNotification(
        "error",
        "Error",
        error.response.data.msg || "something went wrong"
      );
    return Promise.reject(error);
  }
);

export default axios;
