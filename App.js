import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { Video } from 'expo-av';

import Social from './src/components/Social'
import Buttons from './src/components/Buttons'

const App = () => {
  
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
          <Video
              source={{ uri: 'https://i.imgur.com/FitnADa.mp4' }}
              isMuted={true}
              resizeMode="cover"
              shouldPlay
              isLooping
              style={styles.videoHome}
            />
            
        <Buttons/>
        <Social/>
    </View>
  )};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d77a3',
    height:'100%',
  },
  videoHome:{
    width:'100%',
    height: '100%',
    position:'absolute'
  },
});

export default App;