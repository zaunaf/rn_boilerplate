import axios from 'axios';
import {axiosWithToken} from 'utils/AxiosWithToken';
import NavigationService from '@navigation/NavigationService.js';
import {API_URL} from '@env';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (
  username,
  password,
  onLoginSuccess,
  onLoginFailed,
) => async dispatch => {
  try {
    // Change Following Code Suit to Your Style of Authentication

    // Get Token
    // console.log(`Calling ${API_URL} with data ${username} and ${password}...`);
    // let loginUrl = `${API_URL}/api/loginPos`;
    // console.log(loginUrl);

    // Call to backend
    if (username === 'dev' && password === 'dev') {
      let {
        token,
        id,
        name,
        email,
        mobile_phone,
        role_id,
        entity_id,
        entity_name,
        address,
        picture,
      } = {
        token: 'abcdefghijklmnopqrstuvwxyz212313354',
        id: '212313354',
        name: 'dev',
        email: 'dev@dev.com',
        mobile_phone: '0812212313354',
        role_id: '1',
        entity_id: '1',
        entity_name: 'Dev Team',
        address: 'Dev Avenue 212nd',
        picture: null,
      };
      // let responseTk = await axios.post(loginUrl, {
      //   username,
      //   password,
      // });
      // console.log(responseTk);
      // let {
      //   token,
      //   id,
      //   name,
      //   email,
      //   mobile_phone,
      //   role_id,
      //   entity_id,
      //   entity_name,
      //   address,
      //   picture,
      // } = responseTk.data;
    }
    // Callback
    onLoginSuccess();
    dispatch({
      type: LOGIN,
      token: token,
      id: id,
      name: name,
      username: username,
      email: email,
      mobile_phone: mobile_phone,
      role_id: role_id,
      entity_id,
      entity_name,
      address,
      picture: picture,
    });

    // Back to StartupScreen that manages all routing
    NavigationService.navigate('StartupScreen');
  } catch (e) {
    console.log(e.message);
    onLoginFailed(e.message);
  }
};

export const logout = () => async dispatch => {
  // Back to StartupScreen that manages all routing
  console.log('Logging out..');
  dispatch({type: LOGOUT});
  NavigationService.navigate('StartupScreen');
};
