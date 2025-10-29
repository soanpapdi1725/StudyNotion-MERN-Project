import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = (
  method,
  url,
  bodyData,
  headers,
  params,
  signal
) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData || undefined,
    headers: headers || undefined,
    params: params || undefined,
    signal: signal || undefined,
  });
};
