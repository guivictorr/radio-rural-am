import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';
import Social from './src/components/Social'
import Buttons from './src/components/Buttons'
import { Video } from 'expo-av';

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
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#508bc7',
    height:'100%',
  },
  videoHome:{
    width:'100%',
    height: '100%',
    opacity:0.3,
    position:'absolute',
  }
});

export default App;