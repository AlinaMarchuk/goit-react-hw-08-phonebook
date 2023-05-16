import { createSlice } from '@reduxjs/toolkit';
import {
  registerOperation,
  logInOperation,
  logOutOperation,
  refreshUserOperation,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerOperation.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logInOperation.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOutOperation.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUserOperation.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUserOperation.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUserOperation.rejected](state) {
      state.isRefreshing = false;
    },
  },

  //====================================

  // reducers: {
  //   changeFilter: {
  //     reducer(state, { payload }) {
  //       state.filter = payload;
  //     },
  //     prepare(e) {
  //       return {
  //         payload: e.target.value,
  //       };
  //     },
  //   },
  // },
  // extraReducers: builder => {
  //   builder
  //     .addCase(registerOperation.fulfilled, (state, { payload }) => {
  //       state.items.push(payload);
  //     })
  //     .addCase(logInOperation.fulfilled, (state, { payload }) => {
  //       state.items = payload;
  //     })
  //     .addCase(logOutOperation.fulfilled, (state, { payload }) => {
  //       state.items = state.items.filter(el => el.id !== payload);
  //     })
  //     .addCase(refreshUserOperation.fulfilled, (state, { payload }) => {
  //       const idx = state.items.findIndex(el => el.id === payload.id);
  //       state.items[idx] = { ...state.items[idx], ...payload };
  //     })
  //     .addMatcher(
  //       action => {
  //         if (
  //           action.type.startsWith('todo') &&
  //           action.type.endsWith('/pending')
  //         )
  //           return true;
  //       },
  //       state => {
  //         state.isLoading = true;
  //       }
  //     )
  //     .addMatcher(
  //       action => {
  //         if (
  //           action.type.startsWith('todo') &&
  //           action.type.endsWith('/rejected')
  //         )
  //           return true;
  //       },
  //       (state, { payload }) => {
  //         state.isLoading = false;
  //         state.error = payload;
  //       }
  //     )
  //     .addMatcher(
  //       action => {
  //         if (
  //           action.type.startsWith('todo') &&
  //           action.type.endsWith('/fulfilled')
  //         )
  //           return true;
  //       },
  //       state => {
  //         state.isLoading = false;
  //         state.error = null;
  //       }
  //     );
  // },
});

export const authReducer = authSlice.reducer;
