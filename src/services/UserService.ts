import { get, patch, post } from './ApiService';
// import { IPagination } from 'interfaces/UserManagementInterface';

const USER_LOCAL = 'user';

/**
 * Get user object
 * fetchFromAPI: if true, force request new user object from API
 */
export const getUser = async (fetchFromAPI?: boolean) => {
  try {
    let userObj = null;
    if (fetchFromAPI) {
      const userResponse = await getUserFromApi();
      if (userResponse.status === 200) {
        userObj = userResponse.data;
      }
    } else if (localStorage.getItem(USER_LOCAL)) {
      const userJson = localStorage.getItem(USER_LOCAL);
      userObj = userJson !== null ? JSON.parse(userJson) : {};
    }
    return userObj;
  } catch (error: any) {
    throw error;
  }
};

export const setUser = (user: any) => {
  localStorage.setItem(USER_LOCAL, JSON.stringify(user));
};

export const deleteUserInLocalStorage = () => {
  localStorage.removeItem(USER_LOCAL);
  return true;
};

export const resetPassword = async (params: Object) => {
  try {
    const response = await post(`api/reset-password`, params);
    return response;
  } catch (error) {
    throw error;
  }
};

export const resetPasswordVerification = async (params: Object) => {
  try {
    const response = await post(`api/reset-password/verify`, params);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (params: Object, login: boolean = true) => {
  try {
    const response = await patch('api/me', params);
    if (response.status === 200 && login) setUser(response.data.user);
    return response;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (params: Object) => {
  try {
    const response = await post(`api/me/change-password`, params);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getUserFromApi = async () => {
  try {
    const response = await get(`api/me`);
    if (response.status === 200) {
      setUser(response.data);
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const withdrawUserByToken = async (params: Object) => {
  try {
    const payload = {
      ...params,
    };

    const response = await post(`api/user/unsubscribe`, payload);

    if (response.status === 200) {
      setUser(response.data.user);
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const updateUserSettings = async (payload: Object) => {
  try {
    const response = await post('api/me/update-user-settings', payload);

    if (response.status === 200) {
      setUser(response.data.user);
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const suspendUser = async (id: number, isSuspend: boolean) => {
  try {
    const response = await post(`api/user/${id}/suspend`, {
      suspend: isSuspend,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
