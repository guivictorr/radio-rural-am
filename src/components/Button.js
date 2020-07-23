import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Audio } from 'expo-av';
import { MaterialIcons } from '@expo/vector-icons'; 

const radio = new Audio.Sound()
const radioStatus = {
  radioUrl: { uri: 'http://143.208.11.104:8606/stream' },
  startPlaying: { shouldPlay: true },
  initialStatus: {
    staysActiveInBackground: true,
    playThroughEarpieceAndroid: false,
  },
}

const loadRadio = async () => {
    const { radioUrl, initialStatus, startPlaying} = radioStatus

    try{
    Audio.setAudioModeAsync(initialStatus); 
    await radio.loadAsync(radioUrl, startPlaying)
    }catch{
      alert('Rádio fora do ar. 😢')
    }
}
loadRadio()

const Button = () => { 
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

export default Button

