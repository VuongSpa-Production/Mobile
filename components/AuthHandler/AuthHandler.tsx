import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from './../../store/index';
import StackNavigator from './../../navigations/StackNavigator';
import TabNavigator from './../../navigations/TabNavigator';

const AuthHandler = () => {
  const isLoggedIn = useSelector((state: IRootState) => state.root.auth.isLoggedIn);
  const isUser = useSelector((state: IRootState) => state.root.auth.user);
  useEffect(() => {
    console.log('isLoggedIn', isLoggedIn);
    console.log('isUser', isUser);
  }, [isLoggedIn]);

  return isLoggedIn ? <TabNavigator /> : <StackNavigator />;
};

export default AuthHandler;
