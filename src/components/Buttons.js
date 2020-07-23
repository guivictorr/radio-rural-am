import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Audio } from 'expo-av';
import { MaterialIcons } from '@expo/vector-icons'; 

//'http://143.208.11.104:8606/stream'
// Radio 24h 'https://shout12.crossradio.com.br:18002/stream'
const radio = new Audio.Sound()
const radioStatus = {
  radioUrl: { uri: 'https://shout12.crossradio.com.br:18002/stream' },
  startPlaying: { shouldPlay: true },
  initialStatus: {
    staysActiveInBackground: true,
    playThroughEarpieceAndroid: false,
  },
}

const loadRadio = () => {
    const { radioUrl, initialStatus, startPlaying} = radioStatus

    Audio.setAudioModeAsync(initialStatus);   
    radio.loadAsync(radioUrl, startPlaying)
}
loadRadio()

const Buttons = () => { 
        const [isPlaying, setIsPlaying] = useState(true);
       
        function radioCommands(){
          if(isPlaying === true){
            radio.pauseAsync()
            setIsPlaying(!isPlaying)
          }else{
            radio.playAsync()
            setIsPlaying(!isPlaying)
          }
        }

        return(
          <View style={styles.viewButton}>
            <TouchableOpacity onPress={radioCommands}  style={styles.playButton}>
              <MaterialIcons name={isPlaying ? 'pause-circle-filled' : 'play-circle-filled'} size={84} color="white" />
            </TouchableOpacity> 
          </View>
    )}

const styles = StyleSheet.create({
    viewButton:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#3D78B3',
      width:450,
      height:110,
    },
    playButton:{
      padding:36,
    }
  });

export default Buttons

