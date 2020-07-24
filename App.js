import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home/Home'
import News from './src/pages/News/News'

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          title:'Rádio Rural AM',
          headerStyle:{
            backgroundColor:'#36699d'
          },
          headerTintColor:'#fff'
        }}
        />
        <Stack.Screen 
        name="News" 
        component={News}
        options={{
          title:'Notícias',
          headerStyle:{
            backgroundColor:'#36699d'
          },
          headerTintColor:'#fff'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )};

export default App;