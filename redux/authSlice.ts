import { createSlice } from '@reduxjs/toolkit';
import { login } from '../services/user-service';
import { setLocalStorage } from 'utils/localStorageHelper';

interface UserState {
  loading: boolean;
  error: string | null;
  user: any;
  isAuthenticated: boolean;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  error: '',
  loading: false,
  isAuthenticated: false,
  user: {},
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
        setLocalStorage('UserInformation', state.user);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Login đã sảy ra lỗi!';
      });
  },
  reducers: {},
});

export default authSlice.reducer;
