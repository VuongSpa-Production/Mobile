import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  username: string;
  email: string;
};

type AuthState = {
  isLoggedIn: boolean;
  user: User | null;
};

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

// Thunks
export const loadUserData = () => async (dispatch) => {
  try {
    const userData = await AsyncStorage.getItem('userData');
    if (userData !== null) {
      const user = JSON.parse(userData) as User;
      dispatch(login(user));
    }
  } catch (error) {
    console.error('Error loading user data from device:', error);
  }
};

export const saveUserData = (user: User) => async (dispatch) => {
  try {
    await AsyncStorage.setItem('userData', JSON.stringify(user));
    dispatch(login(user));
  } catch (error) {
    console.error('Error saving login info:', error);
  }
};

export const reducer = authSlice.reducer;