import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from './src/routes/Routes';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
