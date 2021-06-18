import * as auth from '../actions/auth';

const INITIAL_STATE = {
  token: '',
  email: '',
  id: '',
  role_id: '',
  entity_id: '',
  entity_name: '',
  name: '',
  username: '',
  mobile_phone: '',
  address: '',
  picture: '',
  isLoading: false,
  // message: "",
};

const authReducer = (state = INITIAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
    case auth.LOGIN:
      return {
        ...state,
        token: action.token,
        email: action.email,
        id: action.id,
        role_id: action.role_id,
        entity_id: action.entity_id,
        entity_name: action.entity_name,
        name: action.name,
        username: action.username,
        mobile_phone: action.mobile_phone,
        address: action.address,
        picture: action.picture,
      };
    case auth.REFRESH_USER_DATA:
      return {
        ...state,
        email: action.email,
        id: action.id,
        role_id: action.role_id,
        entity_id: action.entity_id,
        entity_name: action.entity_name,
        name: action.name,
        username: action.username,
        mobile_phone: action.mobile_phone,
        address: action.address,
        picture: action.picture,
      };
    case auth.LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    case auth.TOGGLE_ISLOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    // case auth.SHOW_MESSAGE:
    //   return {
    //     ...state,
    //     message: action.message,
    //   };
    // case auth.CLEAR_MESSAGE:
    //   return {
    //     ...state,
    //     message: "",
    //   };
    default:
      return state;
  }
};

export default authReducer;
