/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store';
import AppNavigator from './src/navigation/AppNavigator';
import Groups from './src/screens/Tabs/Groups';

const App: () => React$Node = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
        {/* <Groups /> */}
      </PersistGate>
    </Provider>
  );
};

export default App;