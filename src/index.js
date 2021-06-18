/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '@store/reducers';

// Redux Persist
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';

// Redux & Persist
const persistConfig = {
  // key: 'authType',
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer', 'uiReducer', 'dataReducer'], // which reducer want to store
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk, logger);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

AppRegistry.registerComponent(appName, () => App);

// AppRegistry.runApplication(appName, {
//   rootTag: document.getElementById('root'),
// });

export {Provider, PersistGate, store, persistor};
