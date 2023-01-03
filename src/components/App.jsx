import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';

import LogIn from '../pages/Login/LogIn';
import PhoneBook from '../pages/Contacts/PhoneBook';
import SignIn from '../pages/Register/SignIn';
import Welcome from './Welcome/Welcome';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Layout from 'pages/Layout/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userGetCurrent } from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userGetCurrent());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute restricted>
                <Welcome />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <SignIn />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LogIn />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <PhoneBook />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
