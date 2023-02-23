import React, { createContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Toast from 'react-native-toast-message';

import { FormInputsProps } from '../screens/login/interface'
import { firebase } from '../services/api/firebase'

const initialUser = {
  email: "",
  uid: ""
}

const initialState = {
  signIn: (value: FormInputsProps) => { },
  getData: () => { },
  logout: () => { },
  user: initialUser,
  isLoading: false,
}

export const AuthContext = createContext(initialState)

export const AuthProvider = ({ children }: any) => {
  const [authData, setAuthData] = useState<any>(initialUser)
  const [isLoading, setIsLoading] = useState(false);
  
  const signIn = async ({ email, password }: FormInputsProps) => {
    setIsLoading(true);
    try {
      const auth = getAuth(firebase);
      const res = await signInWithEmailAndPassword(auth, email, password);

      const user = {
        uid: res.user.uid,
        user: res.user.email
      };

      await AsyncStorage.setItem('@q2_user', JSON.stringify(user));
      setAuthData(user)
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'OPS, Não foi possível realizar o login!',
      });
    }
  }

  const logout = async () => {
    await AsyncStorage.removeItem('@q2_user');
    setAuthData(initialUser)
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@q2_user')

      if (jsonValue != null && !authData.id) {
        setAuthData(JSON.parse(jsonValue))
      }
    } catch (e) {

    }
  }


  return (
    <AuthContext.Provider
      value={{
        signIn,
        getData,
        logout,
        user: authData,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
