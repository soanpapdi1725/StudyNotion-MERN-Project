import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, headers, bodyData, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    headers: headers ? headers : null,
    data: bodyData ? bodyData : null,
    params: params ? params : null,
  });
};
