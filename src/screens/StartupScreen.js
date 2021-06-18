import React, {useEffect} from 'react';
import {Center, Spinner, Text} from 'native-base';
import {useSelector} from 'react-redux';

const StartupScreen = props => {
  const {token} = useSelector(state => state.authReducer);
  useEffect(() => {
    let nextScreen = '';
    // nextScreen = 'MainTabNavigator';
    nextScreen = 'LoginScreen';
    // if (!token) {
    //   nextScreen = 'LoginScreen';
    // } else {
    //   nextScreen = 'MainTabNavigator';
    // }
    props.navigation.replace(nextScreen);
  }, [token]);
  return (
    <Center flex={1}>
      <Spinner />
    </Center>
  );
};

export default StartupScreen;
