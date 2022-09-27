import { get, post } from './ApiService';
import {
  deleteUserInLocalStorage,
  getUser,
  setUser,
  getUserFromApi,
} from './UserService';

const ACCESS_TOKEN = 'access_token';

export const getToken = () => {
  //check if token exists in local storage
  if (localStorage.getItem(ACCESS_TOKEN)) {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  return '';
};

export const setToken = (token: any) => {
  localStorage.setItem(ACCESS_TOKEN, token);
};

export const deleteAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  return true;
};

export const logout = async () => {
  try {
    const payload = {};
    let response = await post(`api/logout`, payload);
    if (response.status === 200) {
      deleteAccessToken();
      deleteUserInLocalStorage();
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const checkIfLoggedIn = async () => {
  try {
    const token = getToken();
    if (token !== 'undefined' && token !== '') {
      let userResponse = await getUserFromApi();
      if (userResponse.status === 200) {
        if (!getUser()) {
          setUser(userResponse.data);
        }
        return true;
      }
    }

    return false;
  } catch (error) {
    throw error;
  }
};

export const login = async (params: Object) => {
  try {
    const payload = {
      ...params,
    };

    let response = await get(`sanctum/csrf-cookie`);
    if (response.status === 204) {
      response = await post(`api/login`, payload);
      if (response.status === 200) {
        setToken(response.data.access_token);
        setUser(response.data.user);
      }
    }

    return response;
  } catch (error) {
    throw error;
  }
};
