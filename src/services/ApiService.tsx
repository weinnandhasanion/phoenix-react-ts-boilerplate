import axios from 'axios';

const ACCESS_TOKEN = 'access_token';
const BASE_URL = process.env.REACT_APP_URL_BACKEND;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Accept',
  },
  withCredentials: true,
});

export const post = async (
  url: string,
  data: any,
  is_company: boolean = false
) => {
  try {
    let access_token = localStorage.getItem(ACCESS_TOKEN);
    let headers: any = {};
    if (access_token) {
      headers['Authorization'] = `Bearer ${access_token}`;
    }

    let response = await axiosInstance({
      method: 'POST',
      url: url,
      headers: headers,
      data: data,
    });

    return Promise.resolve(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const get = async (url: string, data?: any) => {
  try {
    let access_token = localStorage.getItem(ACCESS_TOKEN);
    let headers: any = {};

    if (access_token) {
      headers['Authorization'] = `Bearer ${access_token}`;
    }

    let response = await axiosInstance({
      method: 'GET',
      url: url,
      headers: headers,
      params: data,
    });

    return Promise.resolve(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const destroy = async (url: string, data?: any) => {
  try {
    let access_token = localStorage.getItem(ACCESS_TOKEN);
    let headers: any = {};

    if (access_token) {
      headers['Authorization'] = 'Bearer ' + access_token;
    }

    let response = await axiosInstance({
      method: 'DELETE',
      url: url,
      headers: headers,
      data: data,
    });

    return Promise.resolve(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const patch = async (url: string, data: any) => {
  try {
    let access_token = localStorage.getItem(ACCESS_TOKEN);
    let headers: any = {};
    if (access_token) {
      headers['Authorization'] = `Bearer ${access_token}`;
    }

    let response = await axiosInstance({
      method: 'PATCH',
      url: url,
      headers: headers,
      data: data,
    });

    return Promise.resolve(response);
  } catch (err) {
    return Promise.reject(err);
  }
};
