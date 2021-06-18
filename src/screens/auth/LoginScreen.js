import React, {useState} from 'react';
import {Input, SubmitButton, Box, ButtonGroup} from '@native-base/formik-ui';
import {Formik} from 'formik';
import {FormControl, Center, Image, Icon, useToast} from 'native-base';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {login} from '@store/actions/auth';

const LoginScreen = props => {
  // Toast management
  const toast = useToast();

  // Form validation
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      // .email('Please enter valid email')
      .required('Username is Required'),
    password: Yup.string()
      // .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  // Login processes
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const onLoginSuccess = () => {
    setIsLoading(false);
    toast({
      position: 'top',
      title: `Login berhasil`,
      _text: {fontSize: 5},
    });
    console.log('Login success!');
  };
  const onLoginFailed = status => {
    setIsLoading(false);
    toast({
      position: 'top',
      title: `Terjadi Error: ${status}`,
      _text: {fontSize: 5},
    });
    console.log('Login failed!');
  };

  const onSubmit = values => {
    // await new Promise(resolve => setTimeout(resolve, 1000));
    // console.log('Bisa ningan diclick..');
    console.log('Submit clicked!');
    console.log(values);
    setIsLoading(true);
    dispatch(
      login(values.username, values.password, onLoginSuccess, onLoginFailed),
    );
  };
  // console.log('Bisa ningan tampil..');
  return (
    <Center flex={1}>
      <Box shadow={1} rounded="xl" pt={4} pr={8} pl={8} pb={8} bg={'white'}>
        <Image
          source={require('@assets/logo/logo-sm.png')}
          resizeMode="stretch"
          style={{width: 100, height: 100, alignSelf: 'center'}}
          alt="superkitchen-logo"
        />
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={onSubmit}
          validationSchema={validationSchema}>
          {({values, errors}) => (
            <Box>
              <FormControl mt={2} isRequired isInvalid={errors.username}>
                {/* <FormControl mt={2}>
                <FormControl.Label
                  color="teal.600"
                  _text={{fontFamily: 'ProximaNova-Regular'}}>
                  Email/Username
                </FormControl.Label> */}
                <Input
                  name="username"
                  autoCapitalize="none"
                  placeholder="Username"
                  InputLeftElement={
                    <Icon
                      name="person-outline"
                      fontSize="xl"
                      type="Ionicons"
                      color="grey"
                      px={2}
                    />
                  }
                  mt={2}
                  w={300}
                />
                <FormControl.ErrorMessage>
                  {errors.username}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl mt={2} isRequired isInvalid={errors.password}>
                {/* <FormControl mt={2} isRequired> */}
                {/* <FormControl.Label
                  color="orange.600"
                  _text={{fontFamily: 'ProximaNova-Regular'}}>
                  Password
                </FormControl.Label> */}
                <Input
                  name="password"
                  type="password"
                  keyboardType="numeric"
                  placeholder="Password"
                  InputLeftElement={
                    <Icon
                      name="key-outline"
                      fontSize="xl"
                      type="Ionicons"
                      color="grey"
                      px={2}
                    />
                  }
                  mt={2}
                  w={300}
                />
                <FormControl.ErrorMessage>
                  {errors.password}
                </FormControl.ErrorMessage>
              </FormControl>
              <Box pb={4} />
              {/* <ButtonGroup spacing={6}>
                <SubmitButton colorScheme="info" w={300} isLoading={isLoading}>
                  Login
                </SubmitButton>
              </ButtonGroup> */}
              {/* <Box mt={4} bg="gray.100" p={3}>
              <Heading size="sm" mb={2}>
                Current State
              </Heading>
              Values: {JSON.stringify(values, null, 2)}
              Errors: {JSON.stringify(errors, null, 2)}
            </Box> */}
            </Box>
          )}
        </Formik>
      </Box>
    </Center>
  );
};

export default LoginScreen;
