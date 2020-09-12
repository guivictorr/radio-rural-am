import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import News from '../pages/News';

const Stack = createStackNavigator();

const Routes = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            headerShown: false,
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
  );
}

export default Routes;