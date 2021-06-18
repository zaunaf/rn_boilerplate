/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {extendTheme, NativeBaseProvider} from 'native-base';
import MainNavigator from './navigation/MainNavigator';
import NavigationService from '@navigation/NavigationService';
import {Provider, PersistGate, store, persistor} from './';

const App: () => Node = () => {
  const theme = extendTheme({
    components: {
      Text: {
        baseStyle: {
          fontFamily: 'GoogleSans-Regular',
        },
      },
      Input: {
        baseStyle: {
          fontFamily: 'GoogleSans-Regular',
        },
      },
    },
    // colors: {
    //   brand: {
    //     900: '#8287af',
    //     800: '#7c83db',
    //     700: '#b3bef6',
    //   },
    // },
    fonts: {
      heading: `GoogleSans-Bold`,
      body: `GoogleSans-Regular`,
      mono: `monospace`,
    },
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={theme}>
          <MainNavigator
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
