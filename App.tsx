
/**
 * App.tsx
 * Copyright (c) 2024 CLB DevTeam.
 * Licensed under the MIT License.
 */


import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider, useSelector } from "react-redux";
import StackNavigator from "./navigations/StackNavigator";
import TabNavigator from "./navigations/TabNavigator";
import { theme } from './styles/Theme';
import store, { IRootState } from "./store";
import './localization/i18n';
import { $CombinedState } from '@reduxjs/toolkit';
import AuthHandler from './components/AuthHandler/AuthHandler';

const myTheme = createTheme({
  ...theme,
  mode: 'light',
  components: {
    Text: {
      h1Style: {
        fontWeight: '700',
        fontSize: 34
      },
      h2Style: {
        fontWeight: '300',
      },
      h3Style: {
        fontWeight: '300',
        fontSize: 14
      },
      h4Style: {
        fontWeight: '300',
        fontSize: 11
      },
    },
    Button: {
      buttonStyle: {
        backgroundColor: '#DB3022',
        borderRadius: 25,
        paddingVertical: 15,
      },
      containerStyle: {
        height: 48,
      },
      titleStyle: {
        fontSize: 14
      }
    }
  }

});

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>  
        <NavigationContainer>
          <ThemeProvider theme={myTheme}>
            <AuthHandler />
          </ThemeProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
