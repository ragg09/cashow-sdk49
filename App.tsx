import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import CounterScreen from './src/screens/CounterScreen';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <CounterScreen />
    </Provider>
  );
};

export default App;
