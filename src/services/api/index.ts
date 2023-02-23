import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'

const api = axios.create({
  baseURL: "http://127.0.0.1/:3333",
});

api.interceptors.response.use(undefined, async (error) => {

  if (error.response && error.response.status === 401) {
    await AsyncStorage.multiRemove(['@dolori_user', '@Dolori_token']);
    api.defaults.headers.Authorization = null;
  }

  return Promise.reject(error);
});

export default api;