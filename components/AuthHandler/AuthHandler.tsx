import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from './../../store/index';
import StackNavigator from './../../navigations/StackNavigator';
import TabNavigator from './../../navigations/TabNavigator';

const AuthHandler = () => {
  const isLoggedIn = useSelector((state: IRootState) => state.root.auth.isLoggedIn);
  useEffect(() => {
    console.log('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return isLoggedIn ? <TabNavigator /> : <StackNavigator />;
};

export default AuthHandler;
