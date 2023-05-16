import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
// import HomePage from 'pages/HomePage/HomePage';
//import LoginPage from 'pages/LoginPage/LoginPage';
//import RegisterPage from 'pages/RegisterPage/RegisterPage';
//import ContactsPage from 'pages/ContactsPage/ContactsPage';
// import styles from './App.module.css';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { refreshUserOperation } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUserOperation());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        {/* <Route path="/contacts" element={<ContactsPage />} /> */}
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};
