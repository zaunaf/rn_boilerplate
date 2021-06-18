import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '@screens/auth/LoginScreen';
import StartupScreen from '@screens/StartupScreen';
import HomeScreen from '@screens/HomeScreen';
import AccountScreen from '@screens/AccountScreen';
import MoneyScreen from '@screens/MoneyScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const MainTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        tabStyle: {fontFamily: 'GoogleSans-Regular'},
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="home-outline" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Money: {
      screen: MoneyScreen,
      navigationOptions: {
        title: 'Sales',
        tabStyle: {fontFamily: 'GoogleSans-Regular'},
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="cash-outline" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        title: 'Account',
        tabStyle: {fontFamily: 'GoogleSans-Regular'},
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name="person-outline"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
  },
  {
    navigationOptions: {
      headerShown: false,
    },
    tabBarOptions: {
      labelStyle: {
        fontSize: 11,
        fontFamily: 'GoogleSans-Regular',
      },
      upperCaseLabel: false,
    },
  },
);

const MainNavigator = createStackNavigator({
  StartupScreen: {
    screen: StartupScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  MainTabNavigator: {
    screen: MainTabNavigator,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(MainNavigator);
